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
//import Editar from '../../Api/Editar';
import Salvar from '../../Api/Salvar';
import uf from '../../Components/uf';
import Load from '../Load';
import estilo from './estilo';

const ClientesForm = ({data, routeInfo}) => {
    const cliente = data;
    const [mensagem, setMensagem] = useState('')
    const [modalMensagem, setModalMensagem] = useState(false);
    const [autoClose, setAutoClose] = useState(false);
    const [tipo, setTipo] = useState(
        cliente == undefined ? 'custom' :
        cliente.cpf_cnpj.length <= 14 ? 'cpf' : 'cnpj'
    )
    
    const geraCodigo = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
       return Math.floor(Math.random()* (max - min + 1));
    }

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
            id: cliente == undefined ? null : cliente.id,
            nome: cliente == undefined ? '' : cliente.nome,
            cpf_cnpj: cliente == undefined ? '' : cliente.cpf_cnpj,
            email: cliente == undefined ? '': cliente.email,
            telefone: cliente == undefined ? '': cliente.telefone,
            cep: cliente == undefined ? '': cliente.cep,
            logradouro: cliente == undefined ? '' : cliente.logradouro,
            bairro: cliente == undefined ? '': cliente.bairro,
            numero: cliente == undefined ? '': cliente.numero,
            complemento: cliente == undefined ? '' : cliente.complemento,
            cidade: cliente == undefined ? '': cliente.cidade,
            uf: cliente == undefined ? '' : cliente.uf,
            codigo_cliente: cliente == undefined ? geraCodigo(100000, 999999) : cliente.codigo_cliente,
            responsavel_tecnico: cliente == undefined ? '' : cliente.responsavel_tecnico,
            responsavel_financeiro: cliente == undefined ? '' : cliente.responsavel_financeiro,
            tipo_unidade: cliente == undefined ? '' : cliente.tipo_unidade,

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
                    <View style={estilo.cpf_cnpj}>
                        <Text style={estilo.label}>CPF:</Text>
                        <TouchableOpacity 
                            style={[estilo.radiosButton, tipo == 'cpf' && estilo.borderSelected]}
                            onPress={() => setTipo('cpf')}
                        >
                            {tipo == 'cpf' && <View style={estilo.selected}></View>}
                        </TouchableOpacity>
                        <Text style={estilo.label}>CNPJ:</Text>
                        <TouchableOpacity 
                            style={[estilo.radiosButton, tipo == 'cnpj' && estilo.borderSelected]}
                            onPress={() => setTipo('cnpj')}
                        >
                            {tipo == 'cnpj' && <View style={estilo.selected}></View>}
                        </TouchableOpacity>
                    </View>
                    <TextInputMask 
                        style={[estilo.input, tipo == 'custom' && estilo.readOnly]}
                        type={tipo}
                        editable={tipo == 'custom' ? false : true}
                        value={values.cpf_cnpj}
                        onBlur={handleBlur('cpf_cnpj')}
                        onChangeText={handleChange('cpf_cnpj')}
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
                            placeholder={{label: 'Selecione...', value: null}}
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
                    <Text style={estilo.label}>Responsável Técnico:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.responsavel_tecnico}
                        onBlur={handleBlur('responsavel_tecnico')}
                        onChangeText={handleChange('responsavel_tecnico')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Responsável Financeiro:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.responsavel_financeiro}
                        onBlur={handleBlur('responsavel_financeiro')}
                        onChangeText={handleChange('responsavel_financeiro')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Tipo de Unidade:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={{ label: 'Selecione...', value: null }}
                            onValueChange={handleChange('tipo_unidade')}
                            value={values.tipo_unidade}
                            items={[
                                { label: 'Matriz', value: 'matriz' },
                                { label: 'Filial', value: 'filial' },
                            ]}
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

export default ClientesForm;