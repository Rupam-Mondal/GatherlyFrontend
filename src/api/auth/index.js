import axiosInstance from "@/config/axiosConfig";

export async function signUpRequest(signUpObject){
    try {
        const response = await axiosInstance.post('/user/signup' , signUpObject);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function signinRequest(signInObject){
    try {
        const response = await axiosInstance.post('/user/signin', signInObject);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}