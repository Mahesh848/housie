import React from 'react';
import './home.scss';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import {over} from 'stompjs';
import SockJS from 'sockjs-client';
import {startGame} from '../../housieService';

var stompClient = null;
const Home = () => {
    const history = useHistory();

    const goto = (url) => {
        history.push(url);
    }

    // const establishConnection = () => {
    //     startGame({
    //         "uuid": "1a5cdb2f-141e-441f-a6b0-bc895865a123",
    //         "participant": "Mahesh"
    //     });
    //     let sock = new SockJS("http://localhost:8080/housie-api");
    //     stompClient = over(sock);
    //     stompClient.connect({}, onConnected, onError);
    // };

    // const onConnected = () => {
    //     stompClient.subscribe("/housie/1a5cdb2f-141e-441f-a6b0-bc895865a123/number", callback1);
    //     stompClient.subscribe("/housie/fbdcb269-9a08-4faf-9409-2e1b4282d22e/number", callback2);
    // };

    // const callback1 = (payload) => {
    //     console.log("game1: " + payload.body);
    // };

    // const callback2 = (payload) => {
    //     console.log("game2: " + payload.body);
    // };

    // const onError = () => {
    //     console.log("Failed to connect websockets");
    // }

    return(
        <div className="home">
            <Button variant="outline-dark" className="btn" onClick={() => goto('/create-game')}>Create a game</Button>
            <Button variant="outline-dark" className="btn">Join in a game</Button>
            <Button variant="outline-dark" className="btn">View a game</Button>
        </div>
    );
}

export default Home;