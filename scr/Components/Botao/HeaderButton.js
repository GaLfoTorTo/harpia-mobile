import React from 'react';
import {  DrawerActions, useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../Style/Colors';

const HeaderButton = ({ menuName }) => {
    const navigate = useNavigation();

    const escolha = () => {
        if(menuName == 'bars'){
            navigate.dispatch(DrawerActions.toggleDrawer())
        }else {
            navigate.dispatch(DrawerActions.jumpTo('Dashboard', {setVar: true}))
        }
    }
    return (
        <TouchableOpacity
            style={estilo.botao}
            onPress={() => escolha()}
        >
            <Icon name={menuName} size={30} style={estilo.icone} />
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    botao: {
        width: 40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 5,
        marginRight: 5,
    },
    icone: {
        color: Colors.botoes.dark
    }
})

export default HeaderButton;