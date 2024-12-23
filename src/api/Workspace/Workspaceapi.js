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
export async function creatWorkspace(workspaceObject){
    try {
        const Token = localStorage.getItem('Token');
        const response = await axiosInstance.post('/workspace/createworkspace' , workspaceObject , {
            headers:{
                'x-access-token': Token
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getWorkspaceById(workspaceObject){
    try {
        const Token = localStorage.getItem('Token');
        const response = await axiosInstance.get('/workspace/Getworkspace', {
            headers: {
                'x-access-token': Token
            },
            params:workspaceObject
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function Joinworkspace(WorkspaceObject){
    try {
        const Token = localStorage.getItem('Token');
        const response = await axiosInstance.post('/workspace/addmember', WorkspaceObject , {
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