import { signinRequest } from "@/api/auth";
import { useMutation }from "@tanstack/react-query";

function useSignIn(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: signinRequest,
        onSuccess: (data) => {
            if(data.success == false){
                console.log(data);
                throw new Error( data.message);
            }
            else{
                console.log(data);
            }
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

export default useSignIn;