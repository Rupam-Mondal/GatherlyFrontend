import { creatWorkspace } from "@/api/Workspace/Workspaceapi";
import { useMutation } from "@tanstack/react-query";

export function useCreateWorkspace() {
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: creatWorkspace,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (data) => {
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