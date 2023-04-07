import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Loader() {
    const typedRef = useRef<any>(null);

    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: ['...'],
        startDelay: 150,
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 150,
        loop: true,
        showCursor: false,
      });
      return () => {
        typed.destroy();
      };
    }, []);
    
    return (
        <div className="loader-field">
            <span>loading<span ref={typedRef}></span></span>
            <div className="loader-bar">
                <div></div>
            </div>
        </div>
    )
}