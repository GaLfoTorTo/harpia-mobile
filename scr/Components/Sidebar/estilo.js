import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors'

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(52,58,64)'
    },
    cardUser: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.botoes.ligth
    },
    userImg: {
        width: 70,
        height: 70,
        borderRadius: 40,
        marginBottom: 10
    },
    userName: {
        color: Colors.botoes.ligth,
        fontSize: 20
    },
    icone: {
        color: Colors.botoes.ligth,
    },
    title: {
        color: Colors.botoes.ligth,
        marginLeft: 10,
    },
    link: {
        color: Colors.botoes.ligth,
        position: 'relative',
        left: 20
    },
    iconeLink:{
        marginTop: 10,
        color: Colors.botoes.ligth
    }
});

export default estilo;