// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super()

        this.state = {
            secondsRemaining: props.initialCount
        }
    }

    render() {
        const message = this.state.secondsRemaining === 0 ? 'Boom!' : `${this.state.secondsRemaining} seconds remaining before explosion`;

        return (
            <div>{message}</div>
        )
    }
}

export default Bomb;