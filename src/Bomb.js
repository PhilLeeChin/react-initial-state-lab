// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super()

        this.state = {
            secondsRemaining: props.initialCount
        }
    }

    render() {
        if(this.state.secondsRemaining === 0) {
            return ('Boom!')
        } else {
            return (`${this.state.secondsRemaining} seconds left before I go boom!`)
        }
    }
}