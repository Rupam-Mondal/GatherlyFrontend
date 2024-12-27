import Editor from "./Editor";

function ChatBox(){
    return (
        <>
            <div className="px-4 w-full">
                <Editor/>
            </div>
            <div className="flex justify-end px-4">shift + enter to next Line</div>
        </>
    )
}

export default ChatBox;