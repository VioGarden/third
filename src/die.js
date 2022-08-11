import React from "react";

export default function Die(props) {


    const style={
        backgroundColor: props.isHeld ? "lightgreen" : "white"
    }

    return (
        <div 
        className="diebox"
        style={style}
        onClick={props.holdDice}
        >
            <p id="diecontent"><b>{props.num}</b></p>
        </div>
    )
} 
