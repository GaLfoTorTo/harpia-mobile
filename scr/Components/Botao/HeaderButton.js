import React from 'react';
import {  DrawerActions, useNavigation, useNavigationState,  } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderButton = ({ menuName }) => {
    const navigate = useNavigation();

    const escolha = () => {
        if(menuName == 'menu'){
            navigate.dispatch(DrawerActions.toggleDrawer())
        }else {
            navigate.dispatch(DrawerActions.jumpTo('Dashboard', {setVar: menuName}))
        }
    }
    return (
        <TouchableOpacity
            style={estilo.botao}
            onAccessibilityAction={{}}
            onPress={() => escolha()}
        >
            <Icon name={menuName} size={30} style={estilo.icone} />
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    botao: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 10,
    },
    icone: {
        color: 'black'
    }
})

export default HeaderButton;