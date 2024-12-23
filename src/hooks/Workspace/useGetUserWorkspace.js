import { GetWorkspaceByUserId } from "@/api/Workspace/Workspaceapi";
import { useQuery } from "@tanstack/react-query";

export function useGetuserWorkspace(){
    const {isFetching , isSuccess , error , data , refetch} = useQuery({
        queryFn:() => {
            return GetWorkspaceByUserId(localStorage.getItem('Token'));
        },
        queryKey:['fetchworkspace'],
        staleTime:30000
    });
    return {
        isFetching,
        isSuccess,
        error,
        data , 
        refetch
    };
}