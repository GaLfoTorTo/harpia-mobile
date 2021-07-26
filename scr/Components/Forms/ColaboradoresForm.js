import React, { useEffect, useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import {TextInputMask} from 'react-native-masked-input'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import {useFormik} from 'formik';
import Buscar from '../../Api/Buscar';
import Salvar from '../../Api/Salvar';
import uf from '../uf';
import estilo from './estilo';

const ColaboradoresForm = ({data, routeInfo}) => {
    const colaborador = data;
    const [mensagem, setMensagem] = useState('')
    const [modalMensagem, setModalMensagem] = useState(false);
    const [autoClose, setAutoClose] = useState(false);
    const [setores, setSetores] = useState(undefined);

    useEffect(() => {
        Buscar(setSetores, routeInfo.route)
    },[])

    const salve = () => {
        Salvar(setMensagem, routeInfo.route, values)
        setModalMensagem(true)
        setAutoClose(true)
    }

    const hideMensagem = () => {
        setMensagem('');
        setModalMensagem(false)
        setAutoClose(false)
    }

    if (autoClose == true) {
        setTimeout(() => {
            hideMensagem()
        }, 5000)
    }
    
    const {handleChange, handleBlur, handleSubmit, values} = useFormik({
        initialValues: { 
            id: colaborador == undefined ? null : colaborador.id,
            nome: colaborador == undefined ? '' : colaborador.nome,
            cpf: colaborador == undefined ? '' : colaborador.cpf,
            email: colaborador == undefined ? '' : colaborador.email,
            telefone: colaborador == undefined ? '' : colaborador.telefone,
            cep: colaborador == undefined ? '': colaborador.cep,
            logradouro: colaborador == undefined ? '' : colaborador.logradouro,
            bairro: colaborador == undefined ? '' : colaborador.bairro,
            numero: colaborador == undefined ? '' : colaborador.numero,
            complemento: colaborador == undefined ? '' : colaborador.complemento,
            cidade: colaborador == undefined ? '': colaborador.cidade,
            uf: colaborador == undefined ? '' : colaborador.uf,
            formacao: colaborador == undefined ? '' : colaborador.formacao,
            funcao: colaborador == undefined ? '' : colaborador.funcao,
            setor: colaborador == undefined ? '' : colaborador.setor,
            foto: colaborador == undefined ? '' : colaborador.foto,

        },
        onSubmit: values => salve()

    });

    return(
        <View style={estilo.form}>
            {mensagem != '' &&
                <Modal
                    isVisible={modalMensagem}
                    animationIn='slideInRight'
                    animationOut='slideOutRight'
                    backdropColor='grey'
                    backdropOpacity={0.3}
                    onBackdropPress={() => hideMensagem()}
                    onBackButtonPress={() => hideMensagem()}
                >
                    <TouchableOpacity
                        style={[estilo.cardMensagem, mensagem == 'Não foi possivel salvar!' && estilo.cardMensagemDanger]}
                        onPress={() => hideMensagem()}
                    >
                        <Text style={estilo.textMensagem}>{mensagem}</Text>
                    </TouchableOpacity>
                </Modal>
            }
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Nome:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.nome}
                        onBlur={handleBlur('nome')}
                        onChangeText={handleChange('nome')}
                        editable={true}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>CPF:</Text>
                    <TextInputMask 
                        style={estilo.input}
                        type={'cpf'}
                        value={values.cpf}
                        onBlur={handleBlur('cpf')}
                        onChangeText={handleChange('cpf')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>E-mail:</Text>
                    <TextInput 
                        style={estilo.input}
                        keyboardType='email-address'
                        value={values.email}
                        onBlur={handleBlur('email')}
                        onChangeText={handleChange('email')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Telefone:</Text>
                    <TextInputMask
                        style={estilo.input} 
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        keyboardType='numeric'
                        value={values.telefone}
                        onBlur={handleBlur('telefone')}
                        onChangeText={handleChange('telefone')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>CEP:</Text>
                    <TextInputMask 
                        style={estilo.input}
                        type={'zip-code'}
                        keyboardType='numeric'
                        value={values.cep}
                        onBlur={handleBlur('cep')}
                        onChangeText={handleChange('cep')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Logradouro:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.logradouro}
                        onBlur={handleBlur('logradouro')}
                        onChangeText={handleChange('logradouro')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col2}>
                    <Text style={estilo.label}>Numero:</Text>
                    <TextInput 
                        style={estilo.input} 
                        keyboardType='numeric'
                        value={values.numero}
                        onBlur={handleBlur('numero')}
                        onChangeText={handleChange('numero')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Complemento:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.complemento}
                        onBlur={handleBlur('complemento')}
                        onChangeText={handleChange('complemento')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Cidade:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.cidade}
                        onBlur={handleBlur('cidade')}
                        onChangeText={handleChange('cidade')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Bairro:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.bairro}
                        onBlur={handleBlur('bairro')}
                        onChangeText={handleChange('bairro')}
                    />
                </View>
                <View style={estilo.col2}>
                    <Text style={estilo.label}>UF:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect 
                            placeholder={values.uf == "" ? { label: 'Selecione...', value: null } : { label: values.uf, value: values.uf }}
                            onValueChange={handleChange('uf')}
                            value={values.uf}
                            items={uf}
                            useNativeAndroidPickerStyle={false}

                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
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
                    <Text style={estilo.label}>Função:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.funcao}
                        onBlur={handleBlur('funcao')}
                        onChangeText={handleChange('funcao')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Setor:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.setor == "" ? { label: 'Selecione...', value: '' } : { label: values.setor, value: values.setor }}
                            onValueChange={handleChange('setor')}
                            value={values.setor}
                            items={setores != undefined ? setores : [{ label: 'setor', value: 'setor' }]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
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

export default ColaboradoresForm;