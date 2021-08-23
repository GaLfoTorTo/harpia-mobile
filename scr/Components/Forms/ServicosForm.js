import React, { useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useFormik} from 'formik';
import Salvar from '../../Api/Salvar';
import estilo from './estilo';

const ServicosForm = ({navigation, data, routeInfo}) => {
    const servico = data;
    const [mensagem, setMensagem] = useState('')
    const [loading, setLoading] = useState(false);
    const [autoClose, setAutoClose] = useState(false);

    const salve = () => {
        Salvar(setMensagem, routeInfo.route, values)
        setLoading(true)
        setAutoClose(true)
    }

    const hideMensagem = () => {
        setMensagem('');
        setLoading(false)
        setAutoClose(false)
        navigation.replace('Listagem', { item: routeInfo})
    }

    if (autoClose == true) {
        setTimeout(() => {
            hideMensagem()
        }, 5000)
    }
    
    const {handleChange, handleBlur, handleSubmit, values} = useFormik({
        initialValues: { 
            id: servico == undefined ? null : servico.id,
            descricao: servico == undefined ? '' : servico.descricao,
            tipo_material: servico == undefined ? '' : servico.tipo_material,
            tipo_servico: servico == undefined ? '' : servico.tipo_servico,
            servico_critico: servico == undefined ? '' : servico.servico_critico,
            /* preco: servico == undefined ? '': servico.preco, */

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
                    <Text style={estilo.label}>Descrição:</Text>
                    <TextInput 
                        style={estilo.input}
                        value={values.descricao}
                        onBlur={handleBlur('descricao')}
                        onChangeText={handleChange('descricao')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Tipo de Material:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.tipo_material == "" ? { label: 'Selecione...', value: '' } : { label: values.tipo_material, value: values.tipo_material }}
                            onValueChange={handleChange('tipo_material')}
                            value={values.tipo_material}
                            items={[
                                { label: 'MR', value: 'MR' },
                                { label: 'MRC', value: 'MRC' },
                            ]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Tipo Serviço:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.tipo_servico == "" ? { label: 'Selecione...', value: '' } : { label: values.tipo_servico, value: values.tipo_servico }}
                            onValueChange={handleChange('tipo_servico')}
                            value={values.tipo_servico}
                            items={[
                                { label: 'Manutenção corretiva', value: 'Manutenção corretiva' },
                                { label: 'Manutenção preventiva', value: 'Manutenção preventiva' },
                                { label: 'Calibração', value: 'Calibração' },
                                { label: 'Qualificação', value: 'Qualificação' },
                                { label: 'Auditoria', value: 'Auditoria' },
                                { label: 'Consultoria', value: 'Consultoria' },
                                { label: 'Manutenção predial', value: 'Manutenção predial' },
                                { label: 'Terceirização', value: 'Terceirização' },
                            ]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Serviço crítico:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.servico_critico == "" ? { label: 'Selecione...', value: '' } : { label: values.servico_critico, value: values.servico_critico }}
                            onValueChange={handleChange('servico_critico')}
                            value={values.servico_critico}
                            items={[
                                { label: 'Sim', value: 'Sim' },
                                { label: 'Não', value: 'Não' },
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

export default ServicosForm;