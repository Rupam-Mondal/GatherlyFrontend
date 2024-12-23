import { getWorkspaceById } from "@/api/Workspace/Workspaceapi";
import { useQuery } from "@tanstack/react-query";

export function useGetWorkspaceId(workspaceId){
    const workspaceObject = {
        workspaceId:workspaceId
    };

    const { isFetching, isSuccess, error, data, refetch } = useQuery({
        queryFn: () => {
            return getWorkspaceById(workspaceObject);
        },
        queryKey: ['fetchworkspaceId']
    })
    return {
        isFetching, 
        isSuccess, 
        error, 
        data, 
        refetch
    }

}