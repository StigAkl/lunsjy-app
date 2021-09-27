import axios from 'axios'; 

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_TOKEN; 

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