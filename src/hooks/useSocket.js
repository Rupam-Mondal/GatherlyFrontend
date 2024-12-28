import SocketContext from "@/context/SocketContext";
import { useContext } from "react";

export default function useSocket(){
    return useContext(SocketContext);
}