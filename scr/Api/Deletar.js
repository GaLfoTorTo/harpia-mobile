import api from './api';

const Deletar = async (callback, link, id) => {
    const responseHTTP = await api
        .get(link+'/deletar/'+id)
        .then(function(response){
            return response.data.sucesso;
        })
        .catch(function(error){
            return undefined;
        });
    responseHTTP == undefined ? callback('Registro não encontrado!') : callback(responseHTTP)
}

export default Deletar;