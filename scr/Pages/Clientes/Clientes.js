import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Text
} from 'react-native';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListarClientes from '../../Api/Clientes/ListarClientes';
import ItemLista from '../../Components/ItemLista/ItemLista';
import estilo from './estilo';

const Clientes = ({navigation}) => {
    const [clientes, SetClientes] = useState();

    /* useEffect(() => {
        ListarClientes(SetClientes)
    },) */

    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView 
                style={estilo.cardLista}
                showsVerticalScrollIndicator={false}
            >
                <View style={estilo.headerCard}>
                    <RectButton style={estilo.botaoNovo}>
                        <Text style={estilo.textoBotao}>Novo Cliente</Text>
                        <Icon name='plus' size={20} color='white' />
                    </RectButton>
                    <View style={estilo.pesquisar}>
                        <TextInput 
                            style={estilo.inputPesquisar}
                            placeholder='Pesquisar'
                        >

                        </TextInput>
                        <TouchableOpacity style={estilo.botaoPesquisar}>
                            <Icon name='search' size={20} color='grey'/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={estilo.labels}>
                    <Text style={estilo.labelId}>#</Text>
                    <View style={estilo.div}></View>
                    <Text style={estilo.label}>Nome</Text>
                    <View style={estilo.div}></View>
                    <Text style={estilo.label}>Alguma </Text>
                </View>
                <FlatList 
                    data={['teste1', 'teste2', 'teste3', 'teste', 'teste1', 'teste2', 'teste3', 'teste', 'teste1', 'teste2']}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return(
                            <View style={estilo.table}>
                                <ItemLista />
                            </View>
                        );
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Clientes;