import React, {useState, useEffect, useRef} from "react";

function MyComponent() {
    //let [number, setNumber] = useState(0)

    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    })

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "gray";
        inputRef.current.value = "Hello World";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.value = "";  
        inputRef2.current.value = "";
    }
    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "gray";
        inputRef1.current.value = "Hello World";
        inputRef.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef.current.value = "";  
        inputRef2.current.value = "";
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "gray";
        inputRef2.current.value = "Hello World";
        inputRef.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
        inputRef.current.value = "";
        inputRef1.current.value = "";  
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click here!
            </button>
            <input ref={inputRef}/>
            <button onClick={handleClick1}>
                Click here1!
            </button>
            <input ref={inputRef1}/>
            <button onClick={handleClick2}>
                Click here2!
            </button>
            <input ref={inputRef2}/>
        </div>
    );
}

export default MyComponent