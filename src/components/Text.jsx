import React, {useState} from "react";
import "../styles.css";

export default function Text(){

    const [text, setText] = useState(" ");

    function updateText(event){
        setText(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={updateText}></input>
            <h1>{text}</h1>
        </div>
    )
}