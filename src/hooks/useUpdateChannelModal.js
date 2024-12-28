import UpdateChannelContext from "@/context/UpdateChannelContext";
import { useContext } from "react";

export default function useChannelUpdateModal(){
    return useContext(UpdateChannelContext);
}