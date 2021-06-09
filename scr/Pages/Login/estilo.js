import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Style/Colors';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(240, 240, 240)',
        padding: 10
    },
    imagem: {
        flex: 1,
        width: '90%',
        height: '20%' 
    },
    cardMessage: {
        position: 'relative',
        bottom: 10,
        width: '90%',
        backgroundColor: Colors.botoes.ligth,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    textMessage: {
        color: Colors.botoes.danger,
        textAlign: 'center',
        flex: 0.9
    },
    cardInputs: {
        flex: 0.7,
        marginBottom: 50,
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
        backgroundColor: Colors.botoes.primary,
        width: '88%',
        height: '25%',
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