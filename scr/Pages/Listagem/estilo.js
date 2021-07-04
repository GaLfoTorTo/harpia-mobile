import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },

    //title header text

    titleHeader: {
        color: Colors.botoes.primary
    },
    //modal mensagem
    cardMensagem: {
        width: '57%',
        height: 70,
        backgroundColor: 'rgba(0, 255, 10, 0.7)',
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
    textMensagem:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    //modal ver
    containerModalVer: {
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: Colors.botoes.ligth,
        padding: 5,
        width: '100%',
        height: '90%'
    },
    headerModal: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    divModal: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
        height: 1
    },
    titleModalVer: {
        flex: 1,
        fontSize: 23,
        color: Colors.botoes.dark
    },
    contentText:{
        margin: 7,
        marginHorizontal: 5,
        flexDirection: 'row',
        marginBottom: 3
    },
    labelModal: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 8
    },
    textModal: {
        fontSize: 17,
    },
    iconeModalVer: {
        color: Colors.botoes.dark
    },

    //modal deletar
    containerModalDeletar: {
        alignSelf: 'center',
        borderRadius: 15,
        backgroundColor: Colors.botoes.ligth,
        padding: 5,
        width: '100%',
        height: '55%'
    },
    contentDeletar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconeModalDeletar: {
        color: 'rgb(255,120,0)',
    },
    titleDeletar: {
        color: Colors.botoes.secondary,
        fontSize: 30,
        fontWeight: 'bold'
    },
    subTitleDeletar: {
        color: Colors.botoes.secondary,
        fontSize: 17,
    },
    botoesDeletar: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    botaoConfirmar: {
        backgroundColor: Colors.botoes.primary,
        padding: 10,
        borderRadius: 5,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoCancelar: {
        backgroundColor: Colors.botoes.danger,
        padding: 10,
        borderRadius: 5,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoModal: {
        color: 'white',
    },
    cardLista: {
        backgroundColor: Colors.botoes.ligth,
        width: '98%',
        height: '90%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(200, 200, 200)'
    },
    headerCard: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 200, 200)'
    },
    botaoNovo:{
        backgroundColor: Colors.botoes.primary,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 5
    },
    textoBotao: {
        color: 'white',
        fontSize: 15,
        marginRight: 5
    },
    pesquisar: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgb(200, 200, 200)'
    },
    inputPesquisar: {
        flex: 0.9,
        padding: 2,
        paddingLeft: 10
    },
    botaoPesquisar: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderLeftWidth: 1,
        borderLeftColor: 'rgb(200, 200, 200)',
        backgroundColor: 'rgba(200, 200, 200, 0.3)'
    },
    vazio: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 5,
        width: '97%',
        height: '20%',
        backgroundColor: 'rgb(0,150,170)'
    },
    textVazio: {
        color: 'white'
    },
    labels: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 200, 200)',
        height: 70,
        alignItems: 'center',
    },
    div: {
        width: 1,
        height: '100%',
        backgroundColor: 'rgb(200, 200, 200)'
    },
    labelId: {
        flex: 0.2,
        paddingHorizontal: 15,
        paddingRight:19,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    label: {
        flex: 1,
        paddingHorizontal: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    table: {
        paddingVertical: 1,
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 200, 200)',
    }
});

export default estilo;