import React from "react";
import ReactDOM from "react-dom";
import Clock from "./frontend/clock";

const Root = () => {
    return (
        <div>
            <Clock />
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    ReactDOM.render(<Root />, main);
});