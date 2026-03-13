import { useEffect, useState } from "react"

function App() {
  
  const [activities, SetActivities] = useState<Activity[]>([]);

  useEffect(() =>{
    fetch('https://localhost:7213/api/activities')
    .then(response => response.json())
    .then(data => SetActivities(data));
  }, [])

  return (
    <div>
      <h3 className="app" style={{ color: 'red' }}>Reactivities</h3>
      <ul>
        {activities.map(activity => 
          <li key={activity.id}>{activity.title}</li>
        )}
      </ul>
    </div>
  )
}

export default App
