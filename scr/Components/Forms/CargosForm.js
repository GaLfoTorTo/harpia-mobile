import React, { useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useFormik} from 'formik';
import Salvar from '../../Api/Salvar';
import estilo from './estilo';

const CargosForm = ({data, routeInfo, navigation }) => {
    const cargo = data;
    const [mensagem, setMensagem] = useState('')
    const [autoClose, setAutoClose] = useState(false);
    const [loading, setLoading] = useState(false);

    const salve = () => {
        Salvar(setMensagem, routeInfo.route, values)
        setLoading(true)
        setAutoClose(true)
    }

    const hideMensagem = () => {
        setMensagem('');
        setLoading(false)
        setAutoClose(false)
        //navigation.replace('Listagem', {item: routeInfo});
    }

    if (autoClose == true) {
        setTimeout(() => {
            hideMensagem()
        }, 5000)
    }
    
    const {handleChange, handleBlur, handleSubmit, values} = useFormik({
        initialValues: { 
            id: cargo == undefined ? null : cargo.id,
            cargo: cargo == undefined ? '' : cargo.cargo,
            formacao: cargo == undefined ? '' : cargo.formacao,
            descricao: cargo == undefined ? '' : cargo.descricao,
            requisitos: cargo == undefined ? '' : cargo.requisitos,
            treinamentos: cargo == undefined ? '': cargo.treinamentos,

        },
        onSubmit: values => salve()

    });

    return(
        <View style={estilo.form}>
            {loading == true &&
                <Modal
                    isVisible={loading}
                    animationIn='fadeIn'
                    animationOut='fadeOut'
                    backdropColor='grey'
                    backdropOpacity={0.3}
                    onBackdropPress={() => hideMensagem()}
                    onBackButtonPress={() => hideMensagem()}
                >
                    {mensagem != '' ?
                    <TouchableOpacity
                        style={[estilo.cardMensagem, mensagem == 'Não foi possivel salvar!' && estilo.cardMensagemDanger]}
                        onPress={() => hideMensagem()}
                    >
                        <Text style={estilo.textMensagem}>{mensagem}</Text>
                    </TouchableOpacity>
                    :
                    <View style={estilo.load}>
                        {/* <ActivityIndicator size='large' color='white' /> */}
                        <LottieView
                            source={require('../../../assets/harpianimation.json')}
                            autoPlay
                            loop
                            style={estilo.load}
                        />
                    </View>
                    }
                </Modal>
            }
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Cargo:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.cargo}
                        onBlur={handleBlur('cargo')}
                        onChangeText={handleChange('cargo')}
                        editable={true}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Formação:</Text>
                    <TextInput 
                        style={estilo.input}
                        value={values.formacao}
                        onBlur={handleBlur('formacao')}
                        onChangeText={handleChange('formacao')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Descrição:</Text>
                    <TextInput 
                        style={estilo.input}
                        multiline={true}
                        numberOfLines={5}
                        value={values.descricao}
                        onBlur={handleBlur('descricao')}
                        onChangeText={handleChange('descricao')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Pré-requisitos:</Text>
                    <TextInput
                        style={estilo.input} 
                        multiline={true}
                        numberOfLines={5}
                        value={values.requisitos}
                        onBlur={handleBlur('requisitos')}
                        onChangeText={handleChange('requisitos')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Treinamentos:</Text>
                    <TextInput 
                        style={estilo.input}
                        multiline={true}
                        numberOfLines={5}
                        value={values.treinamentos}
                        onBlur={handleBlur('treinamentos')}
                        onChangeText={handleChange('treinamentos')}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={estilo.botaoSalvar}
                onPress={handleSubmit}
            >
                <Text style={estilo.textoBotao}>Salvar</Text>
                <Icon name="save" size={20} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default CargosForm;