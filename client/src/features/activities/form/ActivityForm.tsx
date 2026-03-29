import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    activity?: Activity;
    handleCloseForm: () => void
}

export default function ActivityForm({ activity, handleCloseForm }: Props) {

  const { updateActivity, createActivity } = useActivities();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if(activity){
      //更新
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
    }
    else{
      //创建
      await createActivity.mutateAsync(data as unknown as Activity);
    }
    handleCloseForm();
  }

  return (
    <Paper sx={{borderRadius: '3', padding: 3}}>
        <Typography variant="h5" gutterBottom color="primary">CREATE ACTIVITY</Typography>
        <Box onSubmit={handleSubmit} component='form' display='flex' flexDirection='column' gap={3}>
              <TextField name="title" label='Title' defaultValue={activity?.title}/>
              <TextField name="description" label='Description' defaultValue={activity?.description} multiline rows={3} />
              <TextField name="date" label='Date' type="date" 
                         defaultValue={activity?.date ? new Date(activity.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}/>
              <TextField name="category" label='Category' defaultValue={activity?.category}/>
              <TextField name="city" label='City' defaultValue={activity?.city}/>
              <TextField name="venue" label='Venue' defaultValue={activity?.venue}/>
              <Box display='flex' justifyContent='end' gap={3}>
                  <Button onClick={handleCloseForm} color='inherit'>Cancel</Button>
                  <Button type="submit" color='success' variant="contained" disabled={updateActivity.isPending || createActivity.isPending} >Submit</Button>
              </Box>
        </Box>
    </Paper>
  )
}