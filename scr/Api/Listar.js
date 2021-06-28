import api from './api';

const Listar = async (callback, link) => {
    const responseHTTP = await api
        .get(link)
        .then(function(response){
            const data = response.data[0].data;
            return data
        })
        .catch(function(error){
            return error
        });
    callback(responseHTTP)
}

export default Listar;