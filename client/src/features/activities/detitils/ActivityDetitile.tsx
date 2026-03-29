import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selectActivity: Activity;
    handleCancelSelectActivity: () => void;
    handleOpenForm: (id?: string) => void;
}

export default function ActivityDetitile({ selectActivity, handleCancelSelectActivity, handleOpenForm }: Props) {

  const { activities } = useActivities();
  const activity = activities?.find(x => x.id === selectActivity.id);
  if(!activity)
  {
    return <Typography>Loading...</Typography>
  }

  return (
    <Card sx={{borderRadius: '3'}}>
          <CardMedia component="img" image={`https://placehold.co/600x140?text=${activity.category}`} alt={activity.category} />
        <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
            <Typography variant="subtitle1" fontWeight='light'>{activity.date}</Typography>
            <Typography variant="body1">{activity.description}</Typography>
        </CardContent>
        <CardActions>
              <Button onClick={() => handleOpenForm(activity.id)} color="primary">Edit</Button>
              <Button onClick={handleCancelSelectActivity} color="inherit">Cacel</Button>
        </CardActions>
    </Card>
  )
}