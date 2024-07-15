import { useRef, useState } from "react"
import useOutsideClick from ".";

export default function UseOnClickOutsideTest(){
    const [showContent, setShowContent] = useState(false)
    const ref = useRef();
    useOutsideClick(ref, ()=> setShowContent(false))
    
    return <div ref={ref}>
        {
            showContent ? <div>
                <h1>this is a random content</h1>
                <p>Please click outside of this to close this.</p>
            </div> : <button onClick={()=> setShowContent(true)}>Show Content</button>
        }
    </div>
}