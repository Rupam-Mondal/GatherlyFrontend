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
export async function getChannelById(ChannelObject){
    try {
        const Token = localStorage.getItem('Token');
        const response = await axiosInstance.get('/channel/channelDetails' , {
            headers:{
                'x-access-token':Token
            },
            params: ChannelObject
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function UpdateChannelName(UpdateChannelObject){
    try {
        const Token = localStorage.getItem('Token');
        const response = await axiosInstance.post('/channel/updateChannel' , UpdateChannelObject , {
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