import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';
import ItensMenu from './ItensMenu';
import ItensSideBar from '../../Components/Sidebar/ItensSideBar'

const Dashboard = ({ navigation, route}) => {
    const [open, setOpen] = useState(false);
    const [Selected, setSelected] = useState();
    const [expanded, setExpanded] = useState(false);
    const menuName = route.params;

    const selectCadastro = (item) => {
        setSelected(item.id);
        setExpanded(!expanded)
        if(expanded != true && Selected == item.id){
            setSelected(false)
        }

    }

    const navegarListagem = (item) => {
        setOpen(false);
        navigation.navigate('Listagem', {item });
    }
    const navegarNovo = (item) => {
        setOpen(false);
        navigation.navigate(`Form`, { item });
    }
    useEffect(() => {
        if (menuName !== undefined) {
            setOpen(true)
        }
    },[menuName])

    return(
        <ScrollView style={estilo.container}>
            {open == true && 
                <Modal
                    isVisible={open}
                    animationIn='zoomInDown'
                    animationOut='zoomOut'
                    backdropColor='grey'
                    backdropOpacity={0.5}
                    onBackdropPress={() => setOpen(false)}
                    onBackButtonPress={() => setOpen(false)}
                >
                    <View style={estilo.containerModal}>
                        <View style={estilo.headerModal}>
                            <Text style={estilo.titleModal}>Cadastros</Text>
                            <TouchableOpacity
                                onPress={() => setOpen(false)}
                            >
                                <Icon name='times' size={30} color='grey' style={estilo.iconClose} />
                            </TouchableOpacity>
                        </View>
                        <View style={estilo.divModal}></View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <FlatList
                                data={ItensMenu}
                                keyExtractor={(item, index) => index.toString()}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={estilo.cardLink}>
                                            <List.Section>
                                                <List.Accordion
                                                    title={item.title}
                                                    titleStyle={[estilo.titleCardMenu, Selected == item.id && estilo.active]}
                                                    left={() => <Icon name={item.icone} size={20} style={[estilo.icone, Selected == item.id && estilo.active]} />}
                                                    onPress={() => selectCadastro(item)}
                                                    id={expanded}
                                                    expanded={Selected == item.id ? true : false}
                                                >
                                                    <View style={estilo.cardItens}>
                                                        <List.Item
                                                            style={{width: '50%'}}
                                                            title={item.linkNovo}
                                                            titleStyle={estilo.titleCardMenu}
                                                            onPress={() => navegarNovo(item)}
                                                            left={props => <Icon name={item.iconLink} size={15} style={estilo.iconeLink} />}
                                                        />
                                                        <List.Item
                                                            style={{ width: '50%' }}
                                                            title={item.linkListar}
                                                            titleStyle={estilo.titleCardMenu}
                                                            onPress={() => navegarListagem(item)}
                                                            left={props => <Icon name={item.iconLink} size={15} style={estilo.iconeLink} />}
                                                        />
                                                    </View>
                                                </List.Accordion>
                                            </List.Section>
                                        </View>
                                    )
                                }}
                            />
                        </ScrollView>
                    </View>
                </Modal>
            }
            <View style={estilo.containerCard}>
                <View style={[estilo.card, estilo.cardProcedimentos]} >
                    <Icon name='clipboard-check' size={60} style={estilo.iconProcedimentos}/>
                    <Text style={estilo.textVisualizar}>Procedimentos</Text>
                    <RectButton
                        style={[estilo.visualizar, estilo.visualizarProcedimentos]}
                        onPress={() => navegarListagem(ItensSideBar[5])}
                    >
                        <Text style={estilo.textVisualizar}>Visualizar</Text>
                        <Icon name='arrow-circle-right' size={15} style={estilo.iconVisualizar} />
                    </RectButton>
                </View>
                <View style={[estilo.card, estilo.cardServicos]} >
                    <Icon name='toolbox' size={60} style={estilo.iconServicos}/>
                    <Text style={estilo.textVisualizar}>Serviços</Text>
                    <RectButton
                        style={[estilo.visualizar, estilo.visualizarServicos]}
                        onPress={() => navegarListagem(ItensMenu[6])}
                    >
                        <Text style={estilo.textVisualizar}>Visualizar</Text>
                        <Icon name='arrow-circle-right' size={15} style={estilo.iconVisualizar} />
                    </RectButton>
                </View>
            </View>
            <View style={estilo.containerCard}>
                <View style={[estilo.card, estilo.cardColaboradores]} >
                    <Icon name='users' size={60} style={estilo.iconColaboradores}/>
                    <Text style={[estilo.textVisualizar, estilo.textWarning]}>Colaboradores</Text>
                    <RectButton
                        style={[estilo.visualizar, estilo.visualizarColaboradores]}
                        onPress={() => navegarListagem(ItensMenu[2])}
                    >
                        <Text style={[estilo.textVisualizar, estilo.textWarning]}>Visualizar</Text>
                        <Icon name='arrow-circle-right' size={15} style={[estilo.iconVisualizar, estilo.textWarning]} />
                    </RectButton>
                </View>
                <View style={[estilo.card, estilo.cardEquipamentos]} >
                    <Icon name='microscope' size={60} style={estilo.iconEquipamentos}/>
                    <Text style={estilo.textVisualizar}>Equipamentos</Text>
                    <RectButton
                        style={[estilo.visualizar, estilo.visualizarEquipamentos]}
                        onPress={() => navegarListagem(ItensMenu[4])}
                    >
                        <Text style={estilo.textVisualizar}>Visualizar</Text>
                        <Icon name='arrow-circle-right' size={15} style={estilo.iconVisualizar} />
                    </RectButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default Dashboard;