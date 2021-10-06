import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import './_createGame.scss';

import {createGameApi} from '../../housieService';

const CreateGame = () => {

    const [game, setGame] = useState({});

    const createGame = (event) => {
        event.preventDefault();
        createGameApi(game);
    }

    const handleInput = (event) => {
        const {name, value} = event.target
        setGame({...game, [name]:value});
    }

    return (
        <div className="create-game">
            <Form onSubmit={createGame}>
                <Form.Group className="mb-3" controlId="passcode">
                    <Form.Label>Passcode</Form.Label>
                    <Form.Control name="passcode" type="password" placeholder="Enter Passcode" onChange={handleInput} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ticketPrice">
                    <Form.Label>Ticket Price</Form.Label>
                    <Form.Control name="ticketPrice" type="number" placeholder="Enter Ticket Price" onChange={handleInput} required/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}
export default CreateGame;