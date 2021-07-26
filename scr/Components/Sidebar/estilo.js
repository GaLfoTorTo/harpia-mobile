import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors'

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(52,58,64)'
    },
    logoImg:{
        width: 35,
        height: 35,
        borderRadius: 15
    },
    cardLogo:{
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    tituloLogo: {
        color:Colors.botoes.ligth,
        fontSize: 20
    },
    cardUser: {
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: 15
    },
    div:{
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(200, 200, 200, 0.5)'
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginBottom: 10
    },
    perfilName:{
        alignItems: 'center',
        justifyContent: 'center'
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