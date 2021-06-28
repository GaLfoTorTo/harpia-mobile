import api from '../api';

const handleLogin = async (email, password, platform) => {
    const loginHTTP = await api
        .post('logarApp', {
            email: email,
            password: password,
            device_name: platform
        })
        .then(function(response){
            return response
        })
        .catch(function(error){
            return error
        });
    return loginHTTP
}

export default handleLogin;