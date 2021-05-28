import {StyleSheet} from 'react-native';

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
        borderBottomColor: 'white'
    },
    userImg: {
        width: 70,
        height: 70,
        borderRadius: 40,
        marginBottom: 10
    },
    userName: {
        color: 'white',
        fontSize: 20
    },
    icone: {
        color: 'white',
    },
    title: {
        color: 'white',
        marginLeft: 10,
    },
    link: {
        color: 'white',
        position: 'relative',
        left: 20
    },
    iconeLink:{
        marginTop: 10,
        color: 'white'
    }
});

export default estilo;