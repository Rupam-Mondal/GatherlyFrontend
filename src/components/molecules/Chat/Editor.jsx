import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { SendIcon } from "lucide-react";

function Editor() {
    const editorRef = useRef(null);
    const quillInstance = useRef(null);
    function HandleSend(){
        console.log(quillInstance.current.getContents());
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
        }
    }, []);

    return (
        <div className="bg-indigo-200 rounded-2xl relative">
            <div ref={editorRef} style={{ height: "80px", marginRight: "40px" }} />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center cursor-pointer z-10">
                <SendIcon size={20} className="cursor-pointer" onClick={HandleSend} />
            </div>
        </div>
    );
}

export default Editor;
