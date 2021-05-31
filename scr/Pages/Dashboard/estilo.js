import {StyleSheet, Dimensions} from 'react-native';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerModal: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'red',
        width: '90%',
        height: '90%'
    }
});

export default estilo;