// your ImageSlider code here!
import React from 'react' ;

class ImageSlider extends React.Component {
    constructor() {
        super()

        this.state = {
            currentIndex: 0
        }
    }
    render() {
        return (
            <h1>I am on slide {this.state.currentIndex}</h1>
        )
    }
}

export default ImageSlider;