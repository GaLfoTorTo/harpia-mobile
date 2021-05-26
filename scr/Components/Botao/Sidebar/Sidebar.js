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
import * as Icon from 'react-native-vector-icons/';
import estilo from './estilo';

const Sidebar = ({navigation}) => {
    const Sections = [
        {
            id: 1,
            icon: 'user-minus',
            title: 'Clientes',
            content: {
                icon: 'circle',
                link: {
                    name: 'Novo',
                },
                link2: {
                    name: 'Listar',
                }
            }
        },
        {
            id: 2,
            icon: 'users',
            title: 'colaboradores',
            content: {
                icon: 'circle',
                link: {
                    name: 'Novo',
                },
                link2: {
                    name: 'Listar',
                }
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
            icon: '',
            title: 'Equipamentos',
            content: {
                icon: 'circle',
                link: {
                    name: 'Novo',
                },
                link2: {
                    name: 'Listar',
                }
            }
        },
        {
            id: 5,
            icon: 'file',
            title: 'Documentos',
            content: {
                icon: 'circle',
                link: {
                    name: 'Novo',
                },
                link2: {
                    name: 'Listar',
                }
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
                icon: 'circle',
                link: {
                    name: 'Novo',
                },
                link2: {
                    name: 'Listar',
                }
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
                                    left={props => <Icon name={item.icon} size={20}/>}
                                >
                                    <List.Item 
                                        title={item.content.link.name}
                                        left={props => <Icon name={item.content.icon} size={15} />}
                                    />
                                    <List.Item 
                                        title={item.content.link2.name}
                                        left={props => <Icon name={item.content.icon} size={15} />}
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