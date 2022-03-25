import { useState } from "react";

function TextBox(props : {label : string, change : (value : string) => void}) {
    return (
        <div className="TextBox">
            <input type={'text'} placeholder={props.label} onChange={(e) => props.change(e.target.value)}/>
        </div>
    );
}

export default TextBox;