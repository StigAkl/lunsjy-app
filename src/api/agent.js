import axios from 'axios'; 
import { getToken } from '../utils/auth'; 

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common['Authorization'] = getToken();

const responseBody = (response) => response.data; 
const responseStatus = (response) => response.status; 

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, data, config) => axios.post(url,data, config).then(responseBody),
    delete: (url) => axios.delete(url).then(responseStatus)
}

export const Jokes = {
    list: () => requests.get("/api/joke/list"),
    create: (data) => requests.post("/api/joke", data, { 
        headers: {
        'Content-Type': 'application/json' 
        }
    }),
    delete: (id) => requests.delete(`/api/joke/${id}`)
}; 

export const Auth = {
    authenticate: (data) => requests.post('/api/auth', data, { 
        headers: {
        'Content-Type': 'application/json' 
        }}),
    verify: (data) => requests.post('/api/verify', data, { 
        headers: {
        'Content-Type': 'application/json' 
        }
    }),
    setAuthHeader: (token) => {
        axios.defaults.headers.common['Authorization'] = getToken();
    }
}