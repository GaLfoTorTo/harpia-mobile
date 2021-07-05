import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Text
} from 'react-native';
import Modal from 'react-native-modal';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from '../../Components/Load';
//import Editar from '../../Api/Editar';
import estilo from './estilo';

const ClientesForm = ({navigation, route}) => {
    const routeInfo = route.params.routeInfo;
    const data = route.params?.data 

    console.warn(data)
    navigation.setOptions({ title: data == undefined ? 'Novo' : 'Editar', headerTitleStyle: estilo.titleHeader })

    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView 
                style={estilo.cardForm}
            >
                <View style={estilo.headerForm}>
                    <RectButton 
                        style={estilo.botaoNovo}
                        onPress={() => navigation.navigate('ClientesForm')}
                    >
                        <Text style={estilo.textoBotao}>Novo {routeInfo.buttonName}</Text>
                        <Icon name='plus' size={20} color='white' />
                    </RectButton>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default ClientesForm;