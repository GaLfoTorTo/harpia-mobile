import React from 'react';
import {
    View,
    Text,
    Modal,
} from 'react-native';
import estilo from './estilo';

const MenuModal = ({navigation, open}) => {
    return(
        <Modal
            visible={open}
            animationType='fade'
            transparent={true}
        >
            <View style={estilo.container}></View>
        </Modal>
    )
}

export default MenuModal;