import api from './api.js'

const Busca = async (callback, link) => {
    const responseHTTP = await api
        .get(link+'/novo')
        .then(function(response){
            const data = response.data[0];
            const resposta = data.map(data => {
                let setores = {label: data.setor, value: data.setor}
                return setores
            });
            return resposta
        })
        .catch(function(error){
            return error
        });
    callback(responseHTTP);
}

export default Busca;