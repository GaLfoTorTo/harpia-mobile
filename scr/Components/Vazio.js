import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../Style/Colors';

const Vazio = ()=> {
    return(
        <View style={estilo.container}>
            <Text style={estilo.text}>Ainda em Desenvolvimento...</Text>
            <Image 
                style={estilo.img}
                source={require('../../assets/img/AdminLTELogo.png')}
            />
        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.botoes.dark,
        fontSize: 20
    },
    img:{
        
        width: 100,
        height: 100,
    }
})

export default Vazio;