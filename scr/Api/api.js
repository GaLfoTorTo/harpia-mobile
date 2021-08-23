import axios from 'axios';

//harpia.digitalise.dev
const api = axios.create({
    baseURL: 'http://192.168.15.76:8000/api/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default api;  