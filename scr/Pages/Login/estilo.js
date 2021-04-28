import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(240, 240, 240)',
    },
    imagem: {
        width: '80%',
        height: '20%'
    },
    inputs: {
        width: '90%',
        backgroundColor: 'rgb(255, 255, 255)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 15 
    },
    input: {
        backgroundColor: 'rgb(230, 230, 240)',
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
        width: '88%'
    },
    botao: {
        backgroundColor: 'rgb(50, 50, 200)',
        width: '88%',
        height: '35%',
        borderRadius: 20,
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
        color: 'white',
        fontSize: 20,
    }
});

export default estilo;