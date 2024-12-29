import { SendIcon } from "lucide-react";
import Editor from "./Editor";

function ChatBox({ value, setValue }) {
    return (
        <>
            <div className="px-4 w-full relative">
                <Editor value={value}
                    setValue={setValue}
                />
            </div>

            <div className="flex justify-end px-4">shift + enter to next Line</div>
        </>
    )
}

export default ChatBox;