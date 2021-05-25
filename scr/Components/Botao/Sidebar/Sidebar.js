import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {List} from 'react-native'
import estilo from './estilo';

const Sidebar = ({navigation}) => {
    const Sections = [
        {
            id: 1,
            tilte: 'Clientes',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 2,
            tilte: 'colaboradores',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
        {
            id: 3,
            tilte: 'Documentos',
            content: {
                link: 'Novo',
                link2: 'Listar'
            }
        },
    ];
    
    return(
        <ScrollView style={estilo.container}>
            <View style={estilo.cardUser}>
                <Image 
                    //source={}
                    style={estilo.userImg}
                />
                <Text style={estilo.userName}></Text>
            </View>
            <View style={estilo.listaItens}>
                <Accordion 
                    sections={Sections}
                    keyExtractor={(Sections, Sections.id)}
                />
            </View>
        </ScrollView>
    )
}

export default Sidebar;