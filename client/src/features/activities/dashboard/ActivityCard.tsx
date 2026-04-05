import { AccessTime, Place } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material"
import { Link, NavLink } from "react-router";
import { formatData } from "../../../lib/utils/util";

type Props = {
    activity: Activity;
}

export default function ActivityCard({ activity }: Props) {
    const isHost = false;
    const isGoing = false;
    const lable = isHost ? 'You are hosting' : 'You are going';
    const isCancelled = false;
    const color = isHost ? 'secondary' : isGoing ? 'warning' : 'default';

  return (
      <Card elevation={3} sx={{ borderRadius: '3'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <CardHeader avatar={<Avatar sx={{ height: 80, width: 80 }}/>}
                        title={activity.title} slotProps={{ title: { fontSize: 20, fontWeight: 'bold' } }}
                        subheader={ <>Hosted by <Link to={`/profiles/bob`}>Bob</Link></> }
            >
            </CardHeader>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mr: 2 }}>
                {isHost || isGoing && <Chip label={ lable } color={ color } sx={{ borderRadius: 3 }}></Chip>}
                {isCancelled && <Chip label='Cancelled' color='error' sx={{ borderRadius: 3 }}></Chip>}
            </Box>
        </Box>

        <Divider sx={{ mb: 3 }}/>

        <CardContent sx={{ p: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, px: 2 }}>
                <Box display= 'flex' flexGrow={0} alignItems='center'>
                    <AccessTime sx={{ mr: 1 }}/>
                    <Typography variant='body2' noWrap>{formatData(activity.date)}</Typography>
                    <Place sx={{ml: 3, mr: 1}}/>
                    <Typography variant='body2'>{activity.venue}</Typography>
                </Box>
            </Box>

            <Divider />

            <Box sx={{ pl: 3, py: 3, backgroundColor: 'grey.200',display: 'flex', gap: 2}}>
                <Typography>1111111</Typography>
            </Box>
        </CardContent>

        <CardContent sx={{ pb: '2'}}>
            <Typography variant='body2'>{activity.description}</Typography>
              <Button component={NavLink} 
                      to={`/activity/${activity.id}`} 
                      size="medium" 
                      variant="contained"
                      sx={{ display: 'flex', justifySelf: 'self-end', borderRadius: 3 }}>View</Button>
        </CardContent>
    </Card>
  )
}