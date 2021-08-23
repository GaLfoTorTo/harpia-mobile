import React, { useEffect, useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Platform,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker, { event} from '@react-native-community/datetimepicker';
import {format, isBefore} from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useFormik} from 'formik';
import Buscar from '../../Api/Buscar';
import Salvar from '../../Api/Salvar';
import estilo from './estilo';

const DocumentosForm = ({data, routeInfo}) => {
    const documento = data;
    const [mensagem, setMensagem] = useState('')
    const [loading, setLoading] = useState(false);
    const [autoClose, setAutoClose] = useState(false);
    const [tipoDocumento, setTipoDocumento] = useState('interno');
    const [localizacao, setLocalizacao] = useState(undefined);

    const [showDataUltimaAnalise, setShowDatatUltimaAnalise] = useState(false);
    const [showDataAtualizacao, setShowDataAtualizacao] = useState(false);
    const [showDataAprovacao, setShowDataAprovacao] = useState(false);
    const [showDataProximaAnalise, setShowDataProximaAnalise] = useState(false);

    const [DataUltimaAnalise, setDatatUltimaAnalise] = useState(new Date());
    const [DataAtualizacao, setDataAtualizacao] = useState(new Date());
    const [DataAprovacao, setDataAprovacao] = useState(new Date());
    const [DataProximaAnalise, setDataProximaAnalise] = useState(new Date());

    useEffect(() => {
        Buscar(setLocalizacao, routeInfo.route)
    },[])

    const salve = () => {
        values.data_aprovacao = format(values.data_aprovacao, 'dd/MM/yyyy')
        values.data_aprovacao = format(values.data_aprovacao, 'dd/MM/yyyy')
        values.proxima_analise_critica_em = format(values.proxima_analise_critica_em, 'dd/MM/yyyy')
        values.data_da_ultima_analise_critica = format(values.data_da_ultima_analise_critica, 'dd/MM/yyyy')
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
            id: documento == undefined ? null : documento.id,
            tipo_documento: documento == undefined ? tipoDocumento : documento.tipo_documento,
            titulo: documento == undefined ? '' : documento.titulo,
            tipo: documento == undefined ? '' : documento.tipo,
            codigo: documento == undefined ? '' : documento.codigo,
            localizacao: documento == undefined ? '' : documento.localizacao,
            data_de_revisao_edicao_n: documento == undefined ? '' : documento.data_de_revisao_edicao_n,
            data_da_ultima_analise_critica: documento == undefined ? DataUltimaAnalise : documento.data_da_ultima_analise_critica,
            frequencia_da_analise_critica_verificacao: documento == undefined ? '' : documento.frequencia_da_analise_critica_verificacao,
            atualizacao_em: documento == undefined ? DataAtualizacao : documento.atualizacao_em,
            n_de_exemplares: documento == undefined ? '' : documento.n_de_exemplares,
            revisao_edicao: documento == undefined ? '': documento.revisao_edicao,
            revisao_edicao_n: documento == undefined ? '' : documento.revisao_edicao_n,
            data_aprovacao: documento == undefined ? DataAprovacao : documento.data_aprovacao,
            proxima_analise_critica_em: documento == undefined ? DataProximaAnalise : documento.proxima_analise_critica_em,
            num_copias: documento == undefined ? '' : documento.num_copias,
            documento: documento == undefined ? '' : documento.documento,

        },
        onSubmit: values => salve()

    });

    const mudarData = (event, date) => {
        if (Platform.OS == 'android') {
            setShowDataAprovacao(oldState => !oldState)
        }

        if (showDataUltimaAnalise == true) {
            if (date) {
                setDatatUltimaAnalise(date);
                setFieldValue('data_ultima_analise_critica', date);
            }
        } else if (showDataAtualizacao == true) {
            if (date) {
                setDataAtualizacao(date);
                setFieldValue('data_atualizacao', date);
            }
        } else if (showDataAprovacao == true) {
            if (date) {
                setDataAprovacao(date);
                setFieldValue('data_aprovacao', date);
            }
        } else if (showDataProximaAnalise == true) {
            if (date) {
                setDataProximaAnalise(date);
                setFieldValue('proxima_analise_critica_em', date);
            }
        }
    }

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
            <View style={estilo.cpf_cnpj}>
                <Text style={estilo.label}>Interno:</Text>
                <TouchableOpacity
                    style={[estilo.radiosButton, tipoDocumento == 'interno' && estilo.borderSelected]}
                    onPress={() => setTipoDocumento('interno')}
                >
                    {tipoDocumento == 'interno' && <View style={estilo.selected}></View>}
                </TouchableOpacity>
                <Text style={estilo.label}>Externo:</Text>
                <TouchableOpacity
                    style={[estilo.radiosButton, tipoDocumento == 'externo' && estilo.borderSelected]}
                    onPress={() => setTipoDocumento('externo')}
                >
                    {tipoDocumento == 'externo' && <View style={estilo.selected}></View>}
                </TouchableOpacity>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Titulo:</Text>
                    <TextInput 
                        style={estilo.input} 
                        value={values.titulo}
                        onBlur={handleBlur('titulo')}
                        onChangeText={handleChange('titulo')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Tipo:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.tipo == "" ? { label: 'Selecione...', value: '' } : { label: values.tipo, value: values.tipo }}
                            onValueChange={handleChange('tipo')}
                            value={values.tipo}
                            items={[
                                { label: 'Manual', value: 'Manual' },
                                { label: 'Procedimento', value: 'Procedimento' },
                                { label: 'Anexo', value: 'Anexo' },
                                { label: 'Instituicao de uso/trabalho', value: 'Instituicao de uso/trabalho' },
                                { label: 'Formulário', value: 'Formulário' },
                            ]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Código:</Text>
                    <TextInput 
                        style={estilo.input}
                        value={values.codigo}
                        onBlur={handleBlur('codigo')}
                        onChangeText={handleChange('codigo')}
                    />
                </View>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Localização:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={values.localizacao == "" ? { label: 'Selecione...', value: '' } : { label: values.localizacao, value: values.localizacao }}
                            onValueChange={handleChange('localizacao')}
                            value={values.localizacao}
                            items={localizacao != undefined ? localizacao : { label: 'localização', value: 'localização'}}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            {tipoDocumento == 'interno' ?
            <View>
                <View style={estilo.row}>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Revisão Edição:</Text>
                        <TextInput
                            style={estilo.input}
                            value={values.revisao_edicao}
                            onBlur={handleBlur('revisao_edicao')}
                            onChangeText={handleChange('revisao_edicao')}
                        />
                    </View>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Data de Aprovação:</Text>
                        <TouchableOpacity
                            style={[estilo.input, estilo.inputDate]}
                            onPress={() => setShowDataAprovacao(true)}
                        >
                            <Text style={estilo.textInputData}>{format(DataAprovacao, 'dd/MM/yyyy')}</Text>
                        </TouchableOpacity>
                        {showDataAprovacao == true &&
                        <DateTimePicker
                            mode='date'         
                            value={values.data_aprovacao}
                            onChange={mudarData}
                        />
                        }
                    </View>
                </View>
                <View style={estilo.row}>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Número de Cópias:</Text>
                        <TextInput
                            style={estilo.input}
                            keyboardType='numeric'
                            value={values.num_copias}
                            onBlur={handleBlur('num_copias')}
                            onChangeText={handleChange('num_copias')}
                        />
                    </View>
                </View>
            </View>
            :
            <View>
                <View style={estilo.row}>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Data da Revisão/Edição/Nº:</Text>
                        <TextInput 
                            style={estilo.input}
                            value={values.data_de_revisao_edicao_n}
                            onBlur={handleBlur('data_de_revisao_edicao_n')}
                            onChangeText={handleChange('data_de_revisao_edicao_n')}
                        />
                    </View>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Data da última análise crítica:</Text>
                        <TouchableOpacity
                            style={[estilo.input, estilo.inputDate]}
                            onPress={() => setShowDatatUltimaAnalise(true)}
                        >
                            <Text style={estilo.textInputData}>{format(DataUltimaAnalise, 'dd/MM/yyyy')}</Text>
                        </TouchableOpacity>
                        {showDataUltimaAnalise == true &&
                            <DateTimePicker
                                mode='date' 
                                value={values.data_da_ultima_analise_critica}
                                onChange={mudarData}
                            />
                        }
                    </View>
                </View>
                <View style={estilo.row}>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Atualização em:</Text>
                        <TouchableOpacity
                            style={[estilo.input, estilo.inputDate]}
                            onPress={() => setShowDataAtualizacao(true)}
                        >
                            <Text style={estilo.textInputData}>{format(DataAtualizacao, 'dd/MM/yyyy')}</Text>
                        </TouchableOpacity>
                        {showDataAtualizacao == true &&
                            <DateTimePicker
                                mode='date' 
                                value={values.atualizacao_em}
                                onChangeText={mudarData}
                            />
                        }
                    </View>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Nº de Exemplares:</Text>
                        <TextInput
                            style={estilo.input} 
                            keyboardType='numeric'
                            value={values.n_de_exemplares}
                            onBlur={handleBlur('n_de_exemplares')}
                            onChangeText={handleChange('n_de_exemplares')}
                        />
                    </View>
                </View>
                <View style={estilo.row}>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Frequência de análise crítica/verificação:</Text>
                        <TextInput 
                            style={estilo.input} 
                            value={values.frequencia_da_analise_critica_verificacao}
                            onBlur={handleBlur('frequencia_da_analise_critica_verificacao')}
                            onChangeText={handleChange('frequencia_da_analise_critica_verificacao')}
                        />
                    </View>
                </View>
                <View style={estilo.row}>
                    <View style={estilo.col}>
                        <Text style={estilo.label}>Próxima análise crítica:</Text>
                        <TouchableOpacity
                            style={[estilo.input, estilo.inputDate]}
                            onPress={() => setShowDataProximaAnalise(true)}
                        >
                            <Text style={estilo.textInputData}>{format(DataProximaAnalise, 'dd/MM/yyyy')}</Text>
                        </TouchableOpacity>
                        {showDataProximaAnalise == true &&
                        <DateTimePicker
                            mode='date'
                            minimumDate={new Date()}
                            value={values.proxima_analise_critica_em}
                            onChangeText={mudarData}
                        />
                        }
                    </View>
                </View>
            </View>
            }
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

export default DocumentosForm;