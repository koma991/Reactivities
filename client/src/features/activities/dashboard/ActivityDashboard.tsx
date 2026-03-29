import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetitile from "../detitils/ActivityDetitile";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    handleSelectActivity: (id: string) => void;
    handleCancelSelectActivity: () => void;
    handleOpenForm: (id?: string) => void;
    handleCloseForm: () => void;
    editModel: boolean
}

export default function ActivityDashboard({ activities, selectedActivity, handleSelectActivity, handleCancelSelectActivity, handleOpenForm, handleCloseForm, editModel }:Props) {
  return (
    <Grid2 container spacing={3}>
        <Grid2 size = {7}>
        <ActivityList activities={activities} handleSelectActivity={handleSelectActivity} />
        </Grid2>
        <Grid2 size = {5}>
        {selectedActivity && !editModel && <ActivityDetitile selectActivity={selectedActivity} handleCancelSelectActivity={handleCancelSelectActivity} handleOpenForm={handleOpenForm} />}
        {editModel && <ActivityForm activity={selectedActivity} handleCloseForm={handleCloseForm} />}
        </Grid2>
    </Grid2>
  )
}