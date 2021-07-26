import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItensSideBar from './ItensSideBar';
import estilo from './estilo';

const Sidebar = ({navigation}) => {
    const navigate = useNavigation();

    const navegarListagem = (item) => {
        navigation.navigate('Listagem', { item });
    }
    const navegarNovo = (item) => {
        navigate.navigate(`Form`, {item});
    }
    return(
        <ScrollView 
            style={estilo.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={estilo.cardLogo}>
                <Image
                    style={estilo.logoImg}
                    source={require('../../../assets/img/AdminLTELogo.png')}
                />
                <Text style={estilo.tituloLogo}>Harpia Mobile</Text>
            </View>
            <View style={estilo.div}></View>
            <View style={estilo.cardUser}>
                <Image 
                    source={require('../../../assets/img/user-default.png')}
                    style={estilo.userImg}
                />
                <View style={estilo.perfilName}>
                    <Text style={estilo.userName}>Admin</Text>
                    <TouchableOpacity>
                        <Text style={estilo.userName}>sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={estilo.div}></View>
            <View style={estilo.listaItens}>
                <FlatList
                    data={ItensSideBar}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => {
                        return(
                            <List.Section>
                                <List.Accordion 
                                    title={item.title}
                                    titleStyle={estilo.title}
                                    left={() => <Icon name={item.icone} size={20} style={estilo.icone}/>}
                                >
                                    <List.Item 
                                        title={item.linkNovo}
                                        titleStyle={estilo.title}
                                        style={estilo.link}
                                        onPress={()=> navegarNovo(item)}
                                        left={props => <Icon name={item.iconLink} size={15} style={estilo.iconeLink} />}
                                    />
                                    <List.Item 
                                        title={item.linkListar}
                                        titleStyle={estilo.title}
                                        style={estilo.link}
                                        onPress={() => {}}
                                        left={props => <Icon name={item.iconLink} size={15} style={estilo.iconeLink} />}
                                    />
                                </List.Accordion>
                            </List.Section>
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default Sidebar;