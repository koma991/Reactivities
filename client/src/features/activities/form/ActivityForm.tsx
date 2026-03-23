import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
    activity?: Activity;
    handleCloseForm: () => void
}

export default function ActivityForm({ activity, handleCloseForm }: Props) {
  return (
    <Paper sx={{borderRadius: '3', padding: 3}}>
        <Typography variant="h5" gutterBottom color="primary">CREATE ACTIVITY</Typography>
        <Box component='form' display='flex' flexDirection='column' gap={3}>
              <TextField label='Title' value={activity?.title}/>
              <TextField label='Description' value={activity?.description} multiline rows={3} />
              <TextField label='Date' type="date" value={activity?.date}/>
              <TextField label='Category' value={activity?.category}/>
              <TextField label='City' value={activity?.city}/>
              <TextField label='Venue' value={activity?.venue}/>
              <Box display='flex' justifyContent='end' gap={3}>
                  <Button onClick={handleCloseForm} color='inherit'>Cancel</Button>
                  <Button color='success'>Submit</Button>
              </Box>
        </Box>
    </Paper>
  )
}