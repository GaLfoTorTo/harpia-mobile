import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Style/Colors';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container:{
        flex: 1,
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
    },

    //dashboard
    containerCard: {
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        width: '49%',
        height: 190,
        borderRadius: 5,
        paddingTop: 20,
        justifyContent: 'space-between'
    },
    cardProcedimentos:{
        backgroundColor: Colors.botoes.info
    },
    cardServicos: {
        backgroundColor: Colors.botoes.success
    },
    cardColaboradores: {
        backgroundColor: Colors.botoes.warning
    },
    cardEquipamentos: {
        backgroundColor: Colors.botoes.danger
    },
    visualizar:{
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    visualizarProcedimentos:{
        backgroundColor: 'rgb(0, 170, 200)'
    },
    iconProcedimentos: {
        color: 'rgb(0, 170, 200)',
        alignSelf: 'center'
    },
    visualizarServicos: {
        backgroundColor: 'rgb(0, 110, 55)'
    },
    iconServicos: {
        color: 'rgb(0, 110, 55)',
        alignSelf: 'center'
    },
    visualizarColaboradores: {
        backgroundColor: 'rgb(180, 150, 0)'
    },
    iconColaboradores: {
        color: 'rgb(180, 150, 0)',
        alignSelf: 'center'
    },
    visualizarEquipamentos: {
        backgroundColor: 'rgb(200, 20, 50)'
    },
    iconEquipamentos: {
        color: 'rgb(200, 20, 50)',
        alignSelf: 'center'
    },
    textVisualizar:{
        marginRight: 3,
        fontSize: 17,
        color: Colors.botoes.ligth,
        alignSelf: 'center'
    },
    iconVisualizar:{
        fontSize: 20,
        color: Colors.botoes.ligth
    },
    textWarning:{
        color: Colors.botoes.dark
    }
});

export default estilo;