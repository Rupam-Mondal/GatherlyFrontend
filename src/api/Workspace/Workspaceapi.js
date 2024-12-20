import axiosInstance from "@/config/axiosConfig";

export async function GetWorkspaceByUserId() {
    try {
        const Token = localStorage.getItem('Token');
        const response = await axiosInstance.get('/workspace/allworkspace',
            {
                headers: {
                    'x-access-token': Token
                }
            }
        );
        return response.data;
    } catch (error) {
        return null;
        console.log(error);
    }
}