import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.76:8000/api/',
});

/* const Xtoken = async () => {
    const teste = await api.get('/login', {teste: 'teste'}).then(function (response) {
        console.warn(response)
        const header = response.data;
        const achar = header.replace(/</g, '(').replace(/>/g, ')').split(')');
        const token = achar[31].split('"').splice(5,1)
        return token 
    }).catch(function (error) {
        console.warn(error)
    })
    return teste
}
console.warn(Xtoken()) */

export default api;  