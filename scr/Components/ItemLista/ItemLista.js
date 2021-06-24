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

const ItemLista = ({id, nome, cpf_cnpj, open}) => {

    /* var lastTap = 0;
    const getDoubleTap = () => {
        const now = new Date().getTime();
        const delta = now - lastTap;
        const DOUBLE_PRESS_DELAY = 300;

        if(delta < DOUBLE_PRESS_DELAY){
            setOpen(true)
        }
        lastTap = now
    } */

    const Acoes = () => {
        return (
            <View style={estilo.acoes}>
                {/* <TouchableOpacity style={estilo.ver}>
                <Icon name='eye' size={20} color='white' />
            </TouchableOpacity> */}
                <TouchableOpacity
                    style={estilo.editar}
                    onPress={() => console.warn(`editar ${id}`)}
                >
                    <Icon name='edit' size={20} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={estilo.excluir}>
                    <Icon name='trash' size={20} color='white' />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Swipeable
            renderRightActions={Acoes} 
        >
            <RectButton 
                style={estilo.container}
                onPress={() => open()}
            >
                <View style={estilo.campoId}>
                    <Text>{id}</Text>
                </View>
                <View style={estilo.div}></View>
                <View style={estilo.campos}>
                    <Text>{nome}</Text>
                </View>
                <View style={estilo.div}></View>
                <View style={estilo.campos}>
                    <Text>{cpf_cnpj}</Text>
                </View>
            </RectButton>
        </Swipeable>
    );
}



export default ItemLista;
