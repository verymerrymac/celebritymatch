import React, {Component} from 'react';
import './Game.css';
import { MDBIcon } from "mdbreact";
import Webcam from 'react-webcam';

class Game extends Component {
    render() {

        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: 'user',
        }

        return (
            <div className="gamearea mx-auto mt-4 col-md-12">
            <Webcam 
                audio={false}
                height={500}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={500}
                videoConstraints={videoConstraints}
            />
            <div className="icons mx-auto">
            <MDBIcon icon="camera-retro" size="5x" onClick={this.capture}/>
            </div>
        </div>
        )
    }
}

export default Game