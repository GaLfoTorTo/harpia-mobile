import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Style/Colors';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //estilo modal
    containerModal: {
        alignSelf: 'center',
        /* alignItems: 'center',
        justifyContent: 'center', */
        borderRadius: 15,
        backgroundColor: Colors.botoes.ligth,
        padding: 5,
        width: '100%',
        height: '90%'
    },
    headerModal: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    divModal: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
        height: 1
    },
    titleModal: {
        flex: 1,
        fontSize: 18,
        color: Colors.botoes.secondary
    },
    iconClose: {
            
    },
    cardLink:{
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 1,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderTopColor: 'transparent',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    icone: {
        color: Colors.botoes.secondary,
        fontSize: 30
    },
    cardItens: {
        flexDirection: 'row',
        position: 'relative',
        right: 30
    },
    titleCardMenu: {
        color: Colors.botoes.secondary,
        marginLeft: 10,
        fontSize: 18
    },
    iconeLink: {
        marginTop: 10, 
        color: Colors.botoes.secondary
    },
    active: {
        color: Colors.botoes.primary
    }
});

export default estilo;