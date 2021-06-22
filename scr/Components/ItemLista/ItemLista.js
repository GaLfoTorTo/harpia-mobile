import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';

const ItemLista = () => {
    return (
        <Swipeable
            renderRightActions={Acoes} 
        >
            <RectButton style={estilo.container}>
                <View style={estilo.campoId}>
                    <Text>id</Text>
                </View>
                <View style={estilo.div}></View>
                <View style={estilo.campos}>
                    <Text>teste1</Text>
                </View>
                <View style={estilo.div}></View>
                <View style={estilo.campos}>
                    <Text>teste2</Text>
                </View>
            </RectButton>
        </Swipeable>
    );
}

const Acoes = () => {
    return(
        <View style={estilo.acoes}>
            {/* <TouchableOpacity style={estilo.ver}>
                <Icon name='eye' size={20} color='white' />
            </TouchableOpacity> */}
            <TouchableOpacity style={estilo.editar}>
                <Icon name='edit' size={20} color='black'/>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.excluir}>
                <Icon name='trash' size={20} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

export default ItemLista;
