import api from '../api';

const ListarClientes = async (callback) => {
    const loginHTTP = await api
        .get('clientes')
        .then(function(response){
            const clientes = response.data[0].data;
            return clientes
        })
        .catch(function(error){
            return error
        });
    callback(loginHTTP)
}

export default ListarClientes;