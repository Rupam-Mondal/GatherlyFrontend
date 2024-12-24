import CreateChannelContext from "@/context/CreateChannelContext";
import { useContext } from "react";

export default function useCreateChannelModal(){
    return useContext(CreateChannelContext);
}