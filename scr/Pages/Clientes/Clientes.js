import React, { useEffect, useState } from 'react';
import {SafeAreaView, View} from 'react-native';
import ListarClientes from '../../Api/Clientes/ListarClientes';
import estilo from './estilo';

const Clientes = ({navigation}) => {
    const [clientes, SetClientes] = useState();

    useEffect(() => {
        ListarClientes(SetClientes)
    },)

    console.warn(clientes)
    return(
        <SafeAreaView style={estilo.containers}>
            <View style={estilo.cardForm}>
                
            </View>
        </SafeAreaView>
    );
}

export default Clientes;