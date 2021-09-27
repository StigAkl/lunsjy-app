import axios from 'axios'; 

axios.defaults.baseURL = 'https://lunsjy-joke.herokuapp.com/';

const responseBody = (response) => response.data; 

const requests = {
    get: (url) => axios.get(url).then(responseBody)
}

export const Jokes = {
    list: () => requests.get("/api/list")
}; 