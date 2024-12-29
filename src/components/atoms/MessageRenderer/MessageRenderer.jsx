import { useEffect, useRef } from "react";
import Quill from 'quill';

export default function MessageRenderer({value}){
    const rendererref = useRef(null);

    useEffect(() => {
        const quill = new Quill(document.createElement('div') , {
            theme:'snow'
        });
        quill.disable();
        const content = JSON.parse(value);
        quill.setContents(content);
        console.log(quill.root.innerHTML);
        rendererref.current.innerHTML = quill.root.innerHTML
    } , [value]);
    return (
        <>
            <div ref={rendererref} className="ql-editor ql-renderer" />
        </>
    )
}