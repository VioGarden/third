
import React, { useEffect } from "react";
import Die from "./die";
import { useState } from "react";
import { nanoid } from 'nanoid';

export default function App() {

    const [dice, setDice] = useState(CreateDiceArray())

    const [tenzies, setTenzies] = useState(false)

    const [count, setCount] = useState(0)

    const [final, setFinal] = useState(JSON.parse(localStorage.getItem("score")))

    useEffect(() => {
        const allHeld = dice.every(elem => elem.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if(allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    const numnum = dice.map(die => 
        <Die 
        num={die.value}
        isHeld={die.isHeld}
        id={die.id}
        holdDice={() => holdDice(die.id)}
        />)
    
    function generateNewDie() {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid()
        }
    }

    function CreateDiceArray() {
        const newArray = []
        for(let i = 0; i < 10; i++){
            newArray.push(generateNewDie())
        }
        return newArray
    }

    function Roll() {
        if(!tenzies) {
            setCount(elem => elem + 1)
            setDice(oldDice => oldDice.map(elem => {
                return (
                    elem.isHeld ? 
                    elem :
                    generateNewDie()
                )
            }))
        } else {
            const sco = JSON.parse(localStorage.getItem("score"))
            if(sco === 0 || count < sco){
                setFinal(count)
                localStorage.setItem("score", JSON.stringify(count))
            } else {
                localStorage.setItem("score", JSON.stringify(sco))
            }
            setCount(0)
            setTenzies(false)
            setDice(CreateDiceArray())
        }
    }

    function resetHighScore() {
        setFinal(0)
        localStorage.setItem("score", JSON.stringify(0))
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return (
            die.id === id ?
            {...die, isHeld: !die.isHeld} :
            die
            )}
        ))
    }

    return (
        <main>
            <div className="tenbox">
                {numnum}
            </div>
            <button 
            id="rollbutton"
            onClick={Roll}>{tenzies ? "New Game" : "Roll"}
            </button>
            <div className="scorekeeper">
                <p>Current Count : {count}</p>
                <p>{final===0 ? "High Score : N/A" : `High Score : ${final}`}</p>
                <button onClick={resetHighScore}>Reset Record</button>
            </div>
        </main>
    )
}
