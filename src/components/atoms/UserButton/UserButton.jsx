import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, Settings2Icon } from "lucide-react";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function UserButton({auth , setAuth}){
    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem('user');
        localStorage.removeItem('Token');
        setAuth({
            user: null,
            Token: null,
            isLoading: true
        });
        navigate('/auth/signin');
    }
    return (
        <>
            <DropdownMenu >
                <DropdownMenuTrigger className="outline-none">
                    <Avatar className="size-12 bg-zinc-300 select-none">
                        <AvatarImage src={`${auth.user.avatar}`} />
                        <AvatarFallback><IoPersonOutline /></AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="select-none">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer"><Settings2Icon/>Settings</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={logout}> <LogOutIcon/>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default UserButton;