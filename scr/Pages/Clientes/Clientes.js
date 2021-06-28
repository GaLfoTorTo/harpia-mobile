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
import Listar from '../../Api/Listar';
import ItemLista from '../../Components/ItemLista/ItemLista';
import estilo from './estilo';

const Clientes = ({navigation, route}) => {

    const routeInfo = route.params.item;
    const [datas, setDatas] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        Listar(setDatas, routeInfo.route);
    },[])

    var lastTap = 0;
    const getDoubleTap = (item) => {
        const now = new Date().getTime();
        const delta = now - lastTap;
        const DOUBLE_PRESS_DELAY = 300;
        if (delta < DOUBLE_PRESS_DELAY) {
            setFiltered(item);
            setOpen(true);
        }
        lastTap = now
    }

    if(datas == undefined || datas == '')
        return (<Load />)

    return(
        <SafeAreaView style={estilo.container}>
            {open == true &&
                <Modal
                isVisible={open}
                animationIn='zoomInDown'
                animationOut='zoomOut'
                backdropColor='grey'
                backdropOpacity={0.5}
                onBackButtonPress={() => setOpen(false)}
                >
                    <View style={estilo.containerModal}>
                        <View style={estilo.headerModal}>
                            <Text style={estilo.titleModal}>{routeInfo.title}</Text>
                            <TouchableOpacity
                                onPress={() => setOpen(false)}
                            >
                                <Icon name='times' size={30} style={estilo.iconeModal} />
                            </TouchableOpacity>
                        </View>
                        <View style={estilo.divModal}></View>
                        <ScrollView 
                            style={estilo.contentModal}
                            horizontal={true}
                        >
                            <FlatList
                                data={Object.entries(filtered)}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={estilo.contentText}>
                                            <Text style={estilo.labelModal}>{item[0].charAt(0).toUpperCase()+item[0].substr(1)}:</Text>
                                            <Text style={estilo.textModal}>{item[1]}</Text>
                                        </View>
                                    );
                                }}
                            />
                        </ScrollView>
                    </View>
                </Modal>
            }
            <ScrollView 
                style={estilo.cardLista}
                showsVerticalScrollIndicator={false}
            >
                <View style={estilo.headerCard}>
                    <RectButton style={estilo.botaoNovo}>
                        <Text style={estilo.textoBotao}>Novo {routeInfo.title}</Text>
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
                    <Text style={estilo.label}>CPF/CNPJ</Text>
                </View>
                <FlatList 
                    data={datas}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=> {
                        return(
                            <View style={estilo.table}>
                                <ItemLista
                                    id={item.id}
                                    nome={item.nome}
                                    cpf_cnpj={item.cpf_cnpj}
                                    open={() => getDoubleTap(item)}
                                />
                            </View>
                        );
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Clientes;