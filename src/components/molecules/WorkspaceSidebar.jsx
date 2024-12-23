import { useAuth } from "@/hooks/useAuth";
import { FaHome, FaCommentDots, FaEllipsisH } from "react-icons/fa";
import UserButton from "../atoms/UserButton/UserButton";
import { useNavigate } from "react-router-dom";

function WorkspaceSidebar() {
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    return (
        <div className="w-[90px] h-full bg-indigo-700 flex flex-col justify-between items-center py-4">
            <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center text-white text-sm hover:text-gray-300 cursor-pointer"
                onClick={() => {
                    navigate('/home');
                }}
                >
                    <FaHome className="text-xl" />
                    <span>Home</span>
                </div>
                <div className="flex flex-col items-center text-white text-sm hover:text-gray-300 cursor-pointer">
                    <FaCommentDots className="text-xl" />
                    <span>DM</span>
                </div>
                <div className="flex flex-col items-center text-white text-sm hover:text-gray-300 cursor-pointer">
                    <FaEllipsisH className="text-xl" />
                    <span>More</span>
                </div>
            </div>
            <div className="mb-4">
                <UserButton auth={auth} setAuth={setAuth} />
            </div>
        </div>
    );
}

export default WorkspaceSidebar;
