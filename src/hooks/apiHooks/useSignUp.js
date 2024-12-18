import { signUpRequest } from '@/api/auth';
import {useMutation} from '@tanstack/react-query';

const useSignup = () => {
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn:signUpRequest,
        onSuccess:(data) => {
            if (data.success == false) {
                console.log(data);
                throw new Error(data.message);
            }
            else {
                console.log(data);
            }
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