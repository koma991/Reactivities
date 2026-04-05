import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = (id?: string)=>{

      const queryClient = useQueryClient();

      const {data: activities, isPending} = useQuery({
        queryKey: ['activities'],
        queryFn: async () => (await agent.get<Activity[]>('/activities')).data,
      });

      const { data: activity, isLoading } = useQuery({
        queryKey: ['activities', id],
        queryFn: async () => (await agent.get<Activity>(`/activities/${id}`)).data,
        enabled: !!id,
      });

      const updateActivity = useMutation({
          mutationFn: async (activity: Activity) => (await agent.put('/activities', activity)).data,
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activities']})
          },
          
        });

        const createActivity = useMutation({
          mutationFn: async (activity: Activity)=> { return (await agent.post('/activities', activity)).data},
          onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ['activities']})
          }
        });

        const deleteActivity = useMutation({
          mutationFn: async (id: string) => { await agent.delete(`/activities/${id}`) },
          onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['activities'] }) }
        });

      return {
        activities,
        isPending,
        updateActivity,
        createActivity,
        deleteActivity,
        activity,
        isLoading
      }
}