import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivitiDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  
  const [activities, SetActivities] = useState<Activity[]>([]);
  const [selectedActivity, SetSelectActivity] = useState<Activity | undefined>(undefined);
  const [editModel, SetEditModel] = useState(false);

  const handleSelectActivity = (id: string) =>{
    SetSelectActivity(activities.find(x => x.id === id));
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

  useEffect(() =>{
    axios.get<Activity[]>('https://localhost:7213/api/activities')
    .then(response => SetActivities(response.data));
  }, [])

  return (
    <Box sx={{background: '#eeee'}}>
    <CssBaseline />
      <NavBar handleOpenForm={handleOpenForm} />
      <Container maxWidth= 'xl' sx={{mt: 3}}>
        <ActivitiDashboard activities = {activities}
                           selectedActivity = {selectedActivity}
                           handleSelectActivity = {handleSelectActivity}
                           handleCancelSelectActivity = {handleCancelSelectActivity} 
                           editModel = {editModel}
                           handleOpenForm = {handleOpenForm}
                           handleCloseForm = {handleColseForm}
                           />
      </Container>
    </Box>
  )
}

export default App
