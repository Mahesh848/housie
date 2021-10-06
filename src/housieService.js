import axios from "axios";

const restURL = "http://localhost:8080/game";
const headers = {
    'Content-Type': 'application/json'
};

export const createGameApi = (game) => {
    const response = axios.post(restURL + "/create", game, headers);
    console.log(response);
}