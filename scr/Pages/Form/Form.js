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
//import Editar from '../../Api/Editar';
import estilo from './estilo';

import CargosForm from '../../Components/Forms/CargosForm';
import ClientesForm from '../../Components/Forms/ClientesForm';
import ColaboradoresForm from '../../Components/Forms/ColaboradoresForm';

const Form = ({navigation, route}) => {
    const routeInfo = route.params?.item ? route.params.item : route.params.routeInfo;

    const data = route.params.data;

    navigation.setOptions({ title: data == undefined ? 'Novo' : 'Editar', headerTitleStyle: estilo.titleHeader })

    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView 
                style={estilo.cardForm}
            >
                <View style={[estilo.headerForm, data == undefined && estilo.headerForm2]}>
                    {data != undefined &&
                        <RectButton 
                            style={estilo.botaoNovo}
                            onPress={() => navigation.navigate('Form')}
                        >
                            <Text style={estilo.textoBotao}>Novo {routeInfo.buttonName}</Text>
                            <Icon name='plus' size={20} color='white' />
                        </RectButton>
                    }
                    <View style={estilo.links}>
                        <TouchableOpacity
                            onPress={() => navigation.reset({
                                index: 0,
                                routes: [{name: 'Dashboard'}]
                                })
                            }
                        >
                            <Text style={estilo.textLink}>Dashboard/</Text>
                        </TouchableOpacity>
                        {data == undefined &&
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={[estilo.textLink, estilo.textLink2]}>{routeInfo.title}/</Text>
                        </TouchableOpacity> }
                    </View>
                </View>
                {(() => {
                    switch(routeInfo.title){
                        case 'Cargos' :
                            return <CargosForm data={data} routeInfo={routeInfo}/>
                        case 'Clientes':
                            return <ClientesForm data={data} routeInfo={routeInfo} />
                        case 'Colaboradores' :
                            return <ColaboradoresForm data={data} routeInfo={routeInfo}/>
                        default :
                            break;
                    }
                }) ()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Form;