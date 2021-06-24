import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },

    //modal 
    containerModal: {
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
    titleModal: {
        flex: 1,
        fontSize: 18,
        color: Colors.botoes.dark
    },
    iconeModal: {
        color: Colors.botoes.dark
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