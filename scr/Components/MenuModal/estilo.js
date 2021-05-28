import { StyleSheet, Dimensions} from 'react-native';

const medidas = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
});

export default estilo;