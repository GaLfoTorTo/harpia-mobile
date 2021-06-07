import api from '../api';

const handleLogin = async (email, password) => {
    const loginHTTP = await api
        .post('logar', {
            email: email,
            password: password
        })
        .then(function(response){
            console.warn('deu certo', response.data);
            return response
        })
        .catch(function(error){
            console.warn('deuruim ', error);
        });
    return loginHTTP
}

export default handleLogin;