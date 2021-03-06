import React, { useEffect, useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useFormik} from 'formik';
import Buscar from '../../Api/Buscar';
import Salvar from '../../Api/Salvar';
import estilo from './estilo';

const EquipamentosForm = ({navigation, data, routeInfo}) => {
    const equipamento = data;
    const [mensagem, setMensagem] = useState('')
    const [loading, setLoading] = useState(false);
    const [autoClose, setAutoClose] = useState(false);
    const [fornecedor, setFornecedor] = useState(undefined);
    const [setores, setSetores] = useState(undefined);

    useEffect(() => {
        Buscar(setFornecedor, routeInfo.route, setSetores)
    },[])
    
    const salve = () => {
        Salvar(setMensagem, routeInfo.route, values)
        setLoading(true)
        setAutoClose(true)
    }

    const hideMensagem = () => {
        setMensagem('');
        setLoading(false)
        setAutoClose(false)
        navigation.replace('Listagem', {item: routeInfo})
    }

    if (autoClose == true) {
        setTimeout(() => {
            hideMensagem()
        }, 5000)
    }
    
    const {handleChange, handleBlur, handleSubmit, setFieldValue, values} = useFormik({
        initialValues: { 
            id: equipamento == undefined ? null : equipamento.id,
            equipamento_proprio: equipamento == undefined ? '' : equipamento.equipamento_proprio,
            equipamento: equipamento == undefined ? '' : equipamento.equipamento,
            marca: equipamento == undefined ? '' : equipamento.marca,
            modelo: equipamento == undefined ? '' : equipamento.modelo,
            tensao: equipamento == undefined ? '' : equipamento.tensao,
            manual: equipamento == undefined ? '' : equipamento.manual,
            num_serie: equipamento == undefined ? '' : equipamento.num_serie,
            localizacao_manual: equipamento == undefined ? '' : equipamento.localizacao_manual,
            doc_instrucao: equipamento == undefined ? '' : equipamento.doc_instrucao,
            codigo: equipamento == undefined ? '' : equipamento.codigo,
            patrimonio: equipamento == undefined ? '': equipamento.patrimonio,
            fabricante: equipamento == undefined ? '' : equipamento.fabricante,
            fornecedor: equipamento == undefined ? '' : equipamento.fornecedor,
            localizacao_equipamento: equipamento == undefined ? '' : equipamento.localizacao_equipamento
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
                            style={[estilo.cardMensagem, mensagem == 'N??o foi possivel salvar!' && estilo.cardMensagemDanger]}
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
                <View style={estilo.col2}>
                    <Text style={estilo.label}>Equipamento Pr??prio:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.equipamento_proprio == "" ? { label: 'Selecione...', value: '' } : { label: values.equipamento_proprio, value: values.equipamento_proprio }}
                            onValueChange={handleChange('equipamento_proprio')}
                            value={values.equipamento_proprio}
                            items={[
                                { label: 'Sim', value: 'Sim' },
                                { label: 'N??o', value: 'N??o' },
                            ]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Equipamento:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.equipamento}
                        onBlur={handleBlur('equipamento')}
                        onChangeText={handleChange('equipamento')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Marca:</Text>
                    <TextInput 
                        style={estilo.input}
                        value={values.marca}
                        onBlur={handleBlur('marca')}
                        onChangeText={handleChange('marca')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Modelo:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.modelo}
                        onBlur={handleBlur('modelo')}
                        onChangeText={handleChange('modelo')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Tens??o:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.tensao == "" ? { label: 'Selecione...', value: '' } : { label: values.tensao, value: values.tensao }}
                            onValueChange={handleChange('tensao')}
                            value={values.tensao}
                            items={[
                                { label: '110', value: '110' },
                                { label: '220', value: '220' },
                                { label: 'Bivolt', value: 'bivolt' },
                            ]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Manual:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.manual == "" ? { label: 'Selecione...', value: '' } : { label: values.manual, value: values.manual }}
                            onValueChange={handleChange('manual')}
                            value={values.manual}
                            items={[
                                { label: 'Sim', value: 'sim' },
                                { label: 'N??o', value: 'n??o' },
                            ]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Localiza????o Manual:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.localizacao_manual == "" ? { label: 'Selecione...', value: '' } : { label: values.localizacao_manual, value: values.localizacao_manual }}
                            onValueChange={handleChange('localizacao_manual')}
                            value={values.localizacao_manual}
                            items={setores != undefined ? setores : { label: 'setor', value: 'setor' }}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>N?? de s??rie:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.num_serie}
                        onBlur={handleBlur('num_serie')}
                        onChangeText={handleChange('num_serie')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Documento de Instru????o:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.doc_instrucao}
                        onBlur={handleBlur('doc_instrucao')}
                        onChangeText={handleChange('doc_instrucao')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>C??digo:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.codigo}
                        onBlur={handleBlur('codigo')}
                        onChangeText={handleChange('codigo')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Patrim??nio:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.patrimonio}
                        onBlur={handleBlur('patrimonio')}
                        onChangeText={handleChange('patrimonio')}
                    />
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Fabricante:</Text>
                    <TextInput
                        style={estilo.input}
                        value={values.fabricante}
                        onBlur={handleBlur('fabricante')}
                        onChangeText={handleChange('fabricante')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Fornecedor:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.fornecedor == "" ? { label: 'Selecione...', value: '' } : { label: values.fornecedor, value: values.fornecedor }}
                            onValueChange={item => setFieldValue('fornecedor', item)}
                            value={values.fornecedor}
                            items={fornecedor != undefined ? fornecedor : {label: 'fornecedor', value: 'fornecedor'}}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Localiza????o Equipamento:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.localizacao_equipamento == "" ? { label: 'Selecione...', value: '' } : { label: values.localizacao_equipamento, value: values.localizacao_equipamento }}
                            onValueChange={handleChange('localizacao_equipamento')}
                            value={values.localizacao_equipamento}
                            items={setores != undefined ? setores : {label: 'setor', value: 'setor'}}
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

export default EquipamentosForm;