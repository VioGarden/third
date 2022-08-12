import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import MainPage from "./lightdark"

const page = (
    <div>
        <App />
        <MainPage />
    </div>
)

ReactDOM.render(page, document.getElementById('root'))
