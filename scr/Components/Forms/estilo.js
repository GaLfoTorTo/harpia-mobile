import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    form: {
        //flex: 1,
        padding: 5
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    col: {
        flex: 1,
        paddingHorizontal: 5
    },
    col2: {
        flex: 0.4,
        paddingHorizontal: 5
    },
    label: {
        marginLeft: 10,
        fontSize:  17,
        fontWeight: 'bold'
    },
    input: {
        padding: 5,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(200, 200, 200)'
    },
    inputDate: {
        padding: 9, 
    },
    textInputData: {
        color: 'rgba(200, 200, 200, 0.7)'
    },
    textoBotao: {
        color: 'white',
        fontSize: 15,
        marginRight: 5
    },
    cpf_cnpj:{
        flexDirection: 'row'
    },
    readOnly: {
        backgroundColor: 'rgb(230, 230, 230)',
    },
    radiosButton:{
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgb(200, 200, 200)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    borderSelected:{
        borderColor: Colors.botoes.primary
    },
    selected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: Colors.botoes.primary
    },
    botaoSalvar: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        margin: 10,
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.botoes.success,
        padding: 10,
        borderRadius: 5
    },
    //modal mensagem
    cardMensagem: {
        width: '57%',
        height: 70,
        backgroundColor: 'rgba(25, 230, 84, 0.7)',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: 5,
        position: 'relative',
        bottom: 162,
        left: 140
    },
    cardMensagemDanger: {
        width: '57%',
        height: 70,
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: 5,
        position: 'relative',
        bottom: 162,
        left: 140
    },
    textMensagem: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
});

export default estilo;