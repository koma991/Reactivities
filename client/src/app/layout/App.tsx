import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";


function App() {
  const [selectedActivity, SetSelectActivity] = useState<Activity | undefined>(undefined);
  const [editModel, SetEditModel] = useState(false);
  const {activities, isPending} = useActivities();

  const handleSelectActivity = (id: string) =>{
    SetSelectActivity(activities!.find(x => x.id === id));
  }

  const handleCancelSelectActivity = () =>{
    SetSelectActivity(undefined);
  }

  const handleOpenForm = (id?: string) =>{
    if(id) handleSelectActivity(id);
    else handleCancelSelectActivity();
    SetEditModel(true);
  }

  const handleColseForm = () =>{
    SetEditModel(false);
  }

  return (
    <Box sx={{ background: '#eeee', minHeight: '100vh'}}>
      <CssBaseline />
      <NavBar handleOpenForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        { !activities || isPending ? 
          <Typography>Loading...</Typography>
          : <ActivityDashboard activities={activities}
            selectedActivity={selectedActivity}
            handleSelectActivity={handleSelectActivity}
            handleCancelSelectActivity={handleCancelSelectActivity}
            editModel={editModel}
            handleOpenForm={handleOpenForm}
            handleCloseForm={handleColseForm}
          />
          }
      </Container>
    </Box>
  )
}

export default App
