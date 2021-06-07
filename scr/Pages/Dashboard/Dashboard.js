import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import Modal from 'react-native-modal';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';
import ItensMenu from './ItensMenu';

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

    const navegar = (item) => {
        if(item.linkListar == 'Listar'){
            setOpen(false);
            navigation.navigate(item.title);
        }else{
            setOpen(false);
            navigation.navigate(item.title);
        }
    }
    useEffect(() => {
        if (menuName !== undefined) {
            setOpen(true)
        }
    },[menuName])

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
                                                            onPress={() => console.warn('teste')}
                                                            left={props => <Icon name={item.iconLink} size={15} style={estilo.iconeLink} />}
                                                        />
                                                        <List.Item
                                                            style={{ width: '50%' }}
                                                            title={item.linkListar}
                                                            titleStyle={estilo.titleCardMenu}
                                                            onPress={() => navegar(item)}
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
        </SafeAreaView>
    );
}

export default Dashboard;