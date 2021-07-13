import api from './api';

const Salvar = async (callback, link, values) => {
    const responseHTTP = await api
        .post(link+'/salvar', values)
        .then(function (response){
            return response.data.success
        })
        .catch(function(error){
            return 'Não foi possivel salvar!'
        });
    callback(responseHTTP);
}
export default Salvar;