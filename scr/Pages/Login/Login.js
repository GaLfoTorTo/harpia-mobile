import React from 'react';
import {SafeAreaView, View, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import estilo from './estilo';

const Login = ({navigation}) => {
    return(
        <SafeAreaView style={estilo.container}>
            <View style={estilo.contentImg}>
                <Image
                    style={estilo.imagem}
                    source={require('../../../assets/img/logo.png')}
                    resizeMode='contain'
                />
            </View>
            <View style={estilo.cardInputs}>
                <TextInput 
                    style={estilo.input}
                    placeholder='Login'
                />
                <TextInput 
                    style={estilo.input}
                    placeholder='Senha'
                />
                <TouchableOpacity 
                    style={estilo.botao}
                    onPress={() => navigation.replace('Dashboard')}
                >
                    <Text style={estilo.textInput}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;