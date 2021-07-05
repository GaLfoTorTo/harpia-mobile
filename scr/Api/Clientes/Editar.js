import api from './api.js'

const Editar = async (callback, link, id) => {
    const responseHTTP = await api
        .get(link+'/editar/'+id)
        .then(function(response){
            console.warn(response.data)
        })
        .catch(function(error){
            console.warn(error)
        });
}

export default Editar;