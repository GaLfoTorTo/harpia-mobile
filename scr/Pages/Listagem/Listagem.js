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
import Deletar from '../../Api/Deletar';

const Listagem = ({navigation, route}) => {

    const routeInfo = route.params.item;
    const [datas, setDatas] = useState(undefined);
    const [filtered, setFiltered] = useState([]);
    const [modalVer, setModalVer] = useState(false);
    const [modalDeletar, setModalDeletar] = useState(false);
    const [modalMensagem, setModalMensagem] = useState(false);
    const [autoClose, setAutoClose] = useState(false);
    const [id, setId] = useState(id);
    const [mensagem, setMensagem] = useState('');

    const changeModal = (escolha, deleteId) => {
        if(escolha == 'ver'){
            setModalVer(true)
        }else{
            setId(deleteId)
            setModalDeletar(true)
        }
    }

    useEffect(() => {
        navigation.setOptions({ title: routeInfo.title, headerTitleStyle: estilo.titleHeader})
        Listar(setDatas, routeInfo.route);
    },datas)
    
    var lastTap = 0;
    const getDoubleTap = (item) => {
        const now = new Date().getTime();
        const delta = now - lastTap;
        const DOUBLE_PRESS_DELAY = 300;
        if (delta < DOUBLE_PRESS_DELAY) {
            setFiltered(item);
            changeModal('ver')
        }
        lastTap = now
    }

    const excluir = async () => {
        setModalMensagem(true);
        setDatas(undefined);
        setModalDeletar(false);
        setAutoClose(true)
        await Deletar(setMensagem, routeInfo.route, id);
    }

    const hideMensagem = () => {
        setMensagem('');
        setModalMensagem(false)
        setAutoClose(false)
    }

    if (autoClose == true) {
        setTimeout(() => {
            hideMensagem()
        }, 5000)
    }

    if (datas == undefined ) {
        return (<Load />)
    }

    return(
        <SafeAreaView style={estilo.container}>
            {mensagem != '' &&
                <Modal
                isVisible={modalMensagem}
                animationIn='slideInRight'
                animationOut='slideOutRight'
                backdropColor='grey'
                backdropOpacity={0.3}
                onBackdropPress={() => hideMensagem()}
                onBackButtonPress={() => hideMensagem()}
                >   
                    <TouchableOpacity
                    style={[estilo.cardMensagem, mensagem == 'Registro não encontrado!' && estilo.cardMensagemDanger]}
                        onPress={()=> hideMensagem()}
                    >
                        <Text style={estilo.textMensagem}>{mensagem}</Text>
                    </TouchableOpacity>
                </Modal>
            }
            {modalVer == true &&
                <Modal
                isVisible={modalVer}
                animationIn='zoomInDown'
                animationOut='zoomOut'
                backdropColor='black'
                backdropOpacity={0.5}
                onBackdropPress={() => setModalVer(false)}
                onBackButtonPress={() => setModalVer(false)}
                >
                    <View style={estilo.containerModalVer}>
                        <View style={estilo.headerModal}>
                            <Text style={estilo.titleModalVer}>{routeInfo.title}</Text>
                            <TouchableOpacity
                                onPress={() => setModalVer(false)}
                            >
                                <Icon name='times' size={30} style={estilo.iconeModalver} />
                            </TouchableOpacity>
                        </View>
                        <View style={estilo.divModal}></View>
                        <ScrollView
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
            {modalDeletar == true &&
                <Modal
                    isVisible={modalDeletar}
                    animationIn='zoomInDown'
                    animationOut='zoomOutDown'
                    backdropColor='black'
                    backdropOpacity={0.5}
                    onBackdropPress={() => setModalDeletar(false)}
                    onBackButtonPress={() => setModalDeletar(false)}
                >
                    <View style={estilo.containerModalDeletar}>
                        <View style={estilo.contentDeletar}>
                        <Icon name='exclamation-circle' size={100} light={true} style={estilo.iconeModalDeletar}/>
                            <Text style={estilo.titleDeletar}>Tem Certeza?</Text>
                            <Text style={estilo.subTitleDeletar}>Esta ação não pode ser desfeita!</Text>
                        </View>
                        <View style={estilo.botoesDeletar}>
                            <TouchableOpacity
                                style={estilo.botaoConfirmar}
                                onPress={() => excluir()}
                            >
                                <Text style={estilo.textoBotaoModal}>Sim, Deletar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={estilo.botaoCancelar}
                                onPress={() => setModalDeletar(false)}
                            >
                                <Text style={estilo.textoBotaoModal}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
            <ScrollView 
                style={estilo.cardLista}
                showsVerticalScrollIndicator={false}
            >
                <View style={estilo.headerCard}>
                    <RectButton style={estilo.botaoNovo}>
                        <Text style={estilo.textoBotao}>Novo {routeInfo.buttonName}</Text>
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
                    <Text style={estilo.label}>{routeInfo.campo1}</Text>
                    <View style={estilo.div}></View>
                    <Text style={estilo.label}>{routeInfo.campo2}</Text>
                </View>
                {datas == undefined &&
                    <View style={estilo.vazio}>
                        <Text style={estilo.textVazio}>Nenhum registro encontrado!</Text>
                    </View>
                }
                <FlatList 
                    data={datas}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item})=> {
                        return(
                            <View style={estilo.table}>
                                <ItemLista
                                    data={item}
                                    open={() => getDoubleTap(item)}
                                    deletar={() => changeModal('deletar',item.id)}
                                />
                            </View>
                        );
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Listagem;