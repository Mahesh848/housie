import React from 'react';
import './home.scss';
import Button from 'react-bootstrap/Button'

const Home = () => {
    return(
        <div className="home">
            <Button variant="outline-dark" className="btn">Create a game</Button>
            <Button variant="outline-dark" className="btn">Join in a game</Button>
            <Button variant="outline-dark" className="btn">View a game</Button>
        </div>
    );
}

export default Home;