import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Style/Colors';

const medida = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: Colors.botoes.ligth,
        borderRadius: 5,
    },
    campoId: {
        flex: 0.2,
        paddingHorizontal: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    campos: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCampos: {
        textAlign: "center"
    },
    div: {
        width: 1,
        height: '100%',
        backgroundColor: 'rgb(200, 200, 200)'
    },

    acoes:{
        width:140,
        height: 80,
        flexDirection: 'row'
    },
    excluir: {
        width: '50%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: Colors.botoes.danger,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editar: {
        width: '50%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: Colors.botoes.warning,
        alignItems: 'center',
        justifyContent: 'center'
    },
    /* ver: {
        width: '33.33%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: Colors.botoes.success,
        alignItems: 'center',
        justifyContent: 'center'
    } */
})

export default estilo;