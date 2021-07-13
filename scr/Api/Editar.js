import api from './api.js'

const Editar = async (callback, link, id) => {
    const responseHTTP = await api
        .get(link+'/editar/'+id)
        .then(function(response){
            return response.data
        })
        .catch(function(error){
            return error
        });
        callback(responseHTTP)
}

export default Editar;