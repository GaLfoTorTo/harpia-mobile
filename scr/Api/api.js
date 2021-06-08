import axios from 'axios'

/* const Xtoken = async () => {
    const teste = await axios.get('http://localhost:8000/login').then(function (response) {
        console.warn(response)
        const header = response.data;
        const achar = header.replace(/</g, '(').replace(/>/g, ')').split(')');
        const token = achar[31].split('"')
        console.log(token)
        return token
    }).catch(function (error) {
        console.warn(error)
    })
    return teste
} */

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default api;  