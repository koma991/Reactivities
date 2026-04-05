import { createBrowserRouter } from "react-router";
import HomePage from "../../features/activities/Home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import App from "../layout/App";
import ActivityDetailPage from "../../features/activities/detitils/ActivityDetailPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:
        [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activity/:id', element: <ActivityDetailPage /> },
            { path: 'createActivity/:id?', element: <ActivityForm key={'create'} /> },
            { path: 'manager/:id?', element: <ActivityForm /> }
        ]
    }
])