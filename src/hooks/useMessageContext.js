import MessageContext from "@/context/MessageContext";
import { useContext } from "react";

export default function useMessageContext(){
    return useContext(MessageContext);
}