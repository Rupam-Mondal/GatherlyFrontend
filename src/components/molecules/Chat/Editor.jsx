import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

function Editor() {
    const editorRef = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        if (editorRef.current && !quillInstance.current) {
            quillInstance.current = new Quill(editorRef.current, {
                theme: "snow",
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['link'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['clean']
                    ]
                },
                readOnly: false
            });
        }
    }, []);

    return (
        <div className="bg-indigo-200 rounded-2xl">
            <div ref={editorRef} style={{ height: "80px" }} />
        </div>
    );
}

export default Editor;
