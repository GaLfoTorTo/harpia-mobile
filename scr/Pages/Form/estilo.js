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
        width: '99%',
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
    headerForm2: {
        justifyContent: 'flex-end'
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
    botaoSalvar:{
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
    links: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingRight: 10,
        alignItems: 'center',
    },
    textLink: {
        fontSize: 13,
        color: Colors.botoes.secondary
    },
    textLink2: {
        color: Colors.botoes.primary,
        fontSize: 18
    }
});

export default estilo;