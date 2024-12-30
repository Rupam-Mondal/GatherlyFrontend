import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { SendIcon } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useParams } from "react-router-dom";
import useSocket from "@/hooks/useSocket";
import { useQueryClient } from "@tanstack/react-query";

function Editor({value , setValue}) {
    const editorRef = useRef(null);
    const quillInstance = useRef(null);
    const {auth} = useAuth();
    const { channelId } = useParams();
    const { socket, currentChannel, joinchannel } = useSocket();

    function HandleSend() {
        const messageObject = JSON.stringify(quillInstance.current.getContents());
        const Object = {
            body:messageObject,
            senderId: {
                id:auth?.user?.id,
                avatar: auth?.user?.avatar,
                username: auth?.user?.username
            },
            channelId: channelId,
            createdAt: new Date().toISOString()
        };
        setValue(messageObject);
        socket.emit('newMessage' , Object , (data) => {
            console.log("message sent successfully" , data);
        });
        quillInstance.current.setContents([]);
    }

    useEffect(() => {
        if (editorRef.current && !quillInstance.current) {
            quillInstance.current = new Quill(editorRef.current, {
                theme: "snow",
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['link', 'image'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['clean']
                    ]
                },
                readOnly: false
            });

            quillInstance.current.on('text-change', () => {
                const editorElement = editorRef.current;
                const scrollHeight = editorElement.querySelector('.ql-editor').scrollHeight;
                editorElement.style.height = `${scrollHeight}px`;
            });
        }
    }, []);

    return (
        <div className="bg-indigo-200 rounded-2xl relative">
            <div ref={editorRef} className="overflow-hidden" style={{ minHeight: "80px", marginRight: "40px" }} />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center cursor-pointer z-10">
                <SendIcon size={20} className="cursor-pointer" onClick={HandleSend} />
            </div>
        </div>
    );
}

export default Editor;
