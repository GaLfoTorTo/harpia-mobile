import api from './api.js'

const Busca = async (callback, link, callback2) => {
    
    const responseHTTP = await api
        .get(link+'/novo')
        .then(function(response){
            
            const data = response.data[0];
            switch(link){
                case 'setores':
                    let setores = data.map(data => { 
                        return { label: data.setor, value: data.id, setor_pai: data.setor_pai } });
                    return setores;
                case 'colaboradores':
                    let colaboradores = data.map(data => {
                        return { label: data.setor, value: data.setor }});
                    return colaboradores;
                case 'equipamentos' :
                    const data2 = response.data[1];
                    let fornecedores = data.map(data => {
                        return { label: data.razao_social, value: data.razao_social }});
                    let setor = data2.map(data2 => {
                        return { label: data2.setor, value: data2.setor }});
                    return {fornecedores, setor}
                    default:
                        break;
            }
        })
        .catch(function(error){
            return error
        });
    responseHTTP.length <= 1 ? callback(responseHTTP) : callback(responseHTTP.fornecedores), callback2(responseHTTP.setor);
}

export default Busca;