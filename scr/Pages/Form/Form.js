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
import Load from '../../Components/Load';
//import Editar from '../../Api/Editar';
import estilo from './estilo';
import ClientesForm from '../../Components/Clientes/ClientesForm';

const Form = ({navigation, route}) => {
    const routeInfo = route.params.routeInfo;
    const data = route.params.data;

    navigation.setOptions({ title: data == undefined ? 'Novo' : 'Editar', headerTitleStyle: estilo.titleHeader })

    if (alert == true) {
        return <Load />
    }

    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView 
                style={estilo.cardForm}
            >
                <View style={estilo.headerForm}>
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
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={[estilo.textLink, estilo.textLink2]}>{routeInfo.title}/</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {(() => {
                    switch(routeInfo.title){
                        case 'Clientes' :
                            return <ClientesForm data={data} routeInfo={routeInfo}/>
                        default :
                            break;
                    }
                }) ()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Form;