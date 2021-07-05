import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    titleHeader: {
        color: Colors.botoes.primary
    },
    cardForm: {
        backgroundColor: Colors.botoes.ligth,
        width: '98%',
        height: '90%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(200, 200, 200)'
    },
    headerForm: {
        flexDirection: 'row',
        width: '100%',
        height: 90,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 200, 200)'
    },
    botaoNovo: {
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
});

export default estilo;