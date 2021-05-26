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
import Icon from 'react-native-vec'
import estilo from './estilo';

const Sidebar = ({navigation}) => {
    const Sections = [
        {
            id: 1,
            icon: 'user',
            title: 'Clientes',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 2,
            icon: 'users',
            title: 'colaboradores',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 3,
            icon: 'file',
            title: 'Documentos',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 4,
            icon: 'file',
            title: 'Documentos',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 5,
            icon: 'file',
            title: 'Documentos',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 6,
            icon: 'file',
            title: 'Documentos',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 7,
            icon: 'file',
            title: 'Documentos',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
    ];
    
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
                    data={Sections}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <List.Section>
                                <List.Accordion 
                                    title={item.title}
                                    left={props => <Icon icon={item.icon}/>}
                                >
                                    <List.Item title={item.content.link} />
                                    <List.Item title={item.content.link2} />
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