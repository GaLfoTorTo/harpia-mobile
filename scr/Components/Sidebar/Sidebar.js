import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItensSideBar from './ItensSideBar';
import estilo from './estilo';

const Sidebar = ({navigation}) => {

    return(
        <ScrollView 
            style={estilo.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={estilo.cardUser}>
                <Image 
                    //source={}
                    style={estilo.userImg}
                />
                <Text style={estilo.userName}></Text>
            </View>
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
                                        style={estilo.link}
                                        left={props => <Icon name={item.iconLink} size={15} style={estilo.iconeLink} />}
                                    />
                                    <List.Item 
                                        title={item.linkListar}
                                        style={estilo.link}
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