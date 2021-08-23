import React, { useEffect, useState } from 'react';
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useFormik} from 'formik';
import Buscar from '../../Api/Buscar';
import Salvar from '../../Api/Salvar';
import estilo from './estilo';

const SetoresForm = ({navigation, data, routeInfo}) => {
    const setor = data;
    const [mensagem, setMensagem] = useState('')
    const [loading, setLoading] = useState(false);
    const [autoClose, setAutoClose] = useState(false);
    const [setores, setSetores] = useState(undefined);

    useEffect(() => {
        Buscar(setSetores, routeInfo.route)
    }, [])

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
    
    const {handleChange, handleBlur, handleSubmit,setFieldValue, values} = useFormik({
        initialValues: { 
            id: setor == undefined ? null : setor.id,
            setor: setor == undefined ? '' : setor.setor,
            setors_id: setor == undefined ? '' : setor.setors_id
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
                    <Text style={estilo.label}>Setor Pai:</Text>
                    <View style={estilo.input}>
                        <RNPickerSelect
                            placeholder={{ label: 'Selecione...', value: values.setors_id}}
                            onValueChange={selectedValue =>  setFieldValue('setors_id',selectedValue) }
                            value={values.setors_id}
                            itemKey={values.setors_id}
                            items={setores != undefined ? setores : [{ label: 'setor', value: 'setor' }]}
                            useNativeAndroidPickerStyle={false}
                        />
                    </View>
                </View>
            </View>
            <View style={estilo.row}>
                <View style={estilo.col}>
                    <Text style={estilo.label}>Setor:</Text>
                    <TextInput 
                        style={estilo.input}
                        value={values.setor}
                        onBlur={handleBlur('setor')}
                        onChangeText={handleChange('setor')}
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

export default SetoresForm;