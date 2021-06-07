import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';
import ListarClientes from '../../Api/Clientes/ListarClientes';

const Clientes = ({navigation}) => {
    const [clientes, SetClientes] = useState();

    useEffect(() => {
        ListarClientes(SetClientes)
    },)

    console.warn(clientes)
    return(
        <SafeAreaView>

        </SafeAreaView>
    );
}

export default Clientes;