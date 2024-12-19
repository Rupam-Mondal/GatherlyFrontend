import { signinRequest } from "@/api/auth";
import { useMutation }from "@tanstack/react-query";
import { useAuth } from "../useAuth";

function useSignIn(){
    const { setAuth } = useAuth();
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
                
                setAuth({
                    user: response.data,
                    Token: response.data.token,
                    isLoading: false
                })
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