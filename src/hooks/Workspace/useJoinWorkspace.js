import { Joinworkspace } from "@/api/Workspace/Workspaceapi";
import{ useMutation } from "@tanstack/react-query";

function useJoinWorkspace(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: Joinworkspace,
        onSuccess:(data) => {
            console.log(data);
        },
        onError:(data) => {
            console.log(data);
        }
    });
    return {
        isPending, 
        isSuccess, 
        error, 
        mutateAsync
    }
}

export default useJoinWorkspace;