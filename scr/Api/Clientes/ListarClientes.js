import api from '../api';
const ListarClientes = async (callback) => {
    /* const cabecalho = {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'app-id' : ID
        }
    } */

    //const ListarHTTP = await (fetch('https://192.168.15.76/clientes', cabecalho));
    const ListarHTTP = await api.get('/clientes')
    const dadosJson = await ListarHTTP.json();
    callback(dadosJson);
}

export default ListarClientes;