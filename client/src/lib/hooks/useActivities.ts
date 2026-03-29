import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = ()=>{

      const queryClient = useQueryClient();

      const {data: activities, isPending} = useQuery({
        queryKey: ['activity'],
        queryFn: async () => (await agent.get<Activity[]>('/activities')).data,
      });

      const updateActivity = useMutation({
          mutationFn: async (activity: Activity) => (await agent.put('/activities', activity)).data,
          onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['activity']})
          },
          
        });

        const createActivity = useMutation({
          mutationFn: async (activity: Activity)=> { await agent.post('/activities', activity)},
          onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['activity']})
          }
        });

        const deleteActivity = useMutation({
          mutationFn: async (id: string) => { await agent.delete(`/activities/${id}`) },
          onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['activity'] }) }
        });

      return {
        activities,
        isPending,
        updateActivity,
        createActivity,
        deleteActivity
      }
}