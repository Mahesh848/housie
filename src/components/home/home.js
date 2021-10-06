import React from 'react';
import './home.scss';
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const goto = (url) => {
        history.push(url);
    }

    return(
        <div className="home">
            <Button variant="outline-dark" className="btn" onClick={() => goto('/create-game')}>Create a game</Button>
            <Button variant="outline-dark" className="btn">Join in a game</Button>
            <Button variant="outline-dark" className="btn">View a game</Button>
        </div>
    );
}

export default Home;