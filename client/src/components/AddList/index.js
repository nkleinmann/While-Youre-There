import React from "react";
import "./style.css";

function AddList() {
    return (
        <div>
            <input id="handle" type="text" placeholder="Handle"></input>
            <input id="message" type="text" placeholder="message"></input>
            <button id="send">Send</button>
        </div>
    )
}

export default AddList;