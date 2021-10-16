import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date();
        this.state = {date};
    }

    tick() {
        
    }

    render() {
        return (
            <h1>Hey, I'm a Clock</h1>
        )
    }
}