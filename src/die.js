import React from "react";

export default function Die(props) {

    const colorArray = ["red", "orange", "yellow", "green", "blue", 
    "purple", "#59E391"]

    
    function chooseCol() {
        const randCol = Math.floor(Math.random() * 7)
        return colorArray[randCol]
    }

    const style={
        backgroundColor: props.isHeld ? chooseCol() : "white"
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
