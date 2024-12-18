import { signUpRequest } from '@/api/auth';
import {useMutation} from '@tanstack/react-query';

const useSignup = () => {
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn:signUpRequest,
        onSuccess:(data) => {
            console.log("successfull signUp" , data);
        },
        onError:(error) => {
            console.log("Sign uop failed" , error);
        }
    })
    return {
        isPending,
        isSuccess,
        error,
        mutateAsync
    }
}
export default useSignup;