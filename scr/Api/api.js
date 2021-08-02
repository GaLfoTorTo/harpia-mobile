import axios from 'axios';

//harpia.digitalise.dev
const api = axios.create({
    baseURL: 'http://harpia.digitalise.dev/api/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default api;  