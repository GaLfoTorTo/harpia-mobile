import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    ScrollView,
    Text
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';

import CargosForm from '../../Components/Forms/CargosForm';
import ClientesForm from '../../Components/Forms/ClientesForm';
import ColaboradoresForm from '../../Components/Forms/ColaboradoresForm';
import DocumentosForm from '../../Components/Forms/DocumentosForm';
import EquipamentosForm from '../../Components/Forms/EquipamentosForm';
import SetoresForm from '../../Components/Forms/SetoresForm';
import ServicosForm from '../../Components/Forms/ServicosForm';
import Vazio from '../../Components/Vazio'


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
                            return <CargosForm data={data} routeInfo={routeInfo} navigation={navigation}/>
                        case 'Clientes':
                            return <ClientesForm data={data} routeInfo={routeInfo} navigation={navigation} />
                        case 'Colaboradores' :
                            return <ColaboradoresForm data={data} routeInfo={routeInfo} navigation={navigation}/>
                        case 'Setores':
                            return <SetoresForm data={data} routeInfo={routeInfo} navigation={navigation} />
                        case 'Documentos':
                            return <DocumentosForm data={data} routeInfo={routeInfo} navigation={navigation} />
                        case 'Equipamentos':
                            return <EquipamentosForm data={data} routeInfo={routeInfo} navigation={navigation} />
                        case 'Serviços':
                            return <ServicosForm data={data} routeInfo={routeInfo} navigation={navigation} />
                        case 'Ações Propostas':
                            return <Vazio />
                        case 'Análise Crítica':
                            return <Vazio />
                        case 'Inspeção de Recebido':
                            return <Vazio />
                        case 'RNC':
                            return <Vazio />
                        case 'Participantes Treinamento':
                            return <Vazio />
                        case 'Procedimentos':
                            return <Vazio />
                        case 'Registro de Ocorrência':
                            return <Vazio />
                        case 'Reclamações e Sugestões':
                            return <Vazio />
                        case 'Registro Treinamento':
                            return <Vazio />
                        case 'Treinamento':
                            return <Vazio />
                        default :
                            break;
                    }
                }) ()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Form;