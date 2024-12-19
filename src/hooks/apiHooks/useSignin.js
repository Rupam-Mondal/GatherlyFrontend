import { signinRequest } from "@/api/auth";
import { useMutation }from "@tanstack/react-query";

function useSignIn(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: signinRequest,
        onSuccess: (response) => {
            if(response.success == false){
                console.log(response);
                throw new Error( response.message);
            }
            else{
                localStorage.setItem('Token' , response.data.token);
                const userObject = JSON.stringify(response.data);
                localStorage.setItem('user' , userObject);

                console.log(response);
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