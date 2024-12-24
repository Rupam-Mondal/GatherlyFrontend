import axiosInstance from "@/config/axiosConfig";

export async function createChannel(ChannelObject){
    try {
        const Token = localStorage.getItem('Token');
        const response = await axiosInstance.post('/workspace/addchannel' , ChannelObject , {
            headers:{
                'x-access-token':Token
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}