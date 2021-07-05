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

const ItemLista = ({navigation, data, open, deletar, editar}) => {

    const dados = Object.entries(data);
    
    const Acoes = () => {
        return (
            <View style={estilo.acoes}>
                <TouchableOpacity
                    style={estilo.editar}
                    onPress={() => editar()}
                >
                    <Icon name='edit' size={20} color='black' />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={estilo.excluir}
                    onPress={() => deletar()}
                >
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
                    <Text>{data.id}</Text>
                </View>
                <View style={estilo.div}></View>
                <View style={estilo.campos}>
                    <Text style={estilo.textCampos}>{dados[1][1]}</Text>
                </View>
                <View style={estilo.div}></View>
                <View style={estilo.campos}>
                    <Text style={estilo.textCampos}>{dados[2][1]}</Text>
                </View>
            </RectButton>
        </Swipeable>
    );
}



export default ItemLista;
