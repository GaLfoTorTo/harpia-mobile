import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    Platform
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Load from '../../Components/Load';
import handleLogin from '../../Api/Login/apiLogin';
import estilo from './estilo';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const plataforma = Platform.OS

    const Logar = async () => {
        setLoading(true);
        if(email == '' || email == undefined || password == '' || password == undefined){
            setMessage('Login e Senha são obrigátorios');
        }else{
            const resposta = await handleLogin(email, password, plataforma);
            if(resposta.data != ''){
                navigation.replace('Dashboard');
            }else{
                setLoading(false);
                setMessage('Login ou Senha inválidos');
            }
        }
        setLoading(false)
    }
    if(loading)
        return (<Load /> )

    return(
        <SafeAreaView style={estilo.container}>
            <Image
                style={estilo.imagem}
                source={require('../../../assets/img/logo.png')}
                resizeMode='contain'
            />
            {message != '' ?
                <View style={estilo.cardMessage}>
                    <Text style={estilo.textMessage}>{message}</Text>
                    <TouchableOpacity
                        onPress={()=>setMessage('')}
                    >
                        <Icon name='times' size={15} style={estilo.textMessage} />
                    </TouchableOpacity>
                </View>
                : null
            }
            <View style={estilo.cardInputs}>
                <TextInput
                    icon='mail'
                    style={estilo.input}
                    placeholder='Login'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    keyboardType='email-address'
                    returnKeyLabel='next'
                    returnKeyType='next'
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    icon='key'
                    style={estilo.input}
                    placeholder='Senha'
                    secureTextEntry={true}
                    autoCompleteType='password'
                    autoCapitalize='none'
                    returnKeyLabel='go'
                    returnKeyType='go'
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity 
                    style={estilo.botao}
                    onPress={() => Logar()}
                >
                    <Text style={estilo.textInput}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;