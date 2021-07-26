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
import {useFormik} from 'formik';
import Buscar from '../../Api/Buscar';
import Salvar from '../../Api/Salvar';
import estilo from './estilo';

const SetoresForm = ({data, routeInfo}) => {
    const setor = data;
    const [mensagem, setMensagem] = useState('')
    const [modalMensagem, setModalMensagem] = useState(false);
    const [autoClose, setAutoClose] = useState(false);
    const [setores, setSetores] = useState(undefined);

    useEffect(() => {
        Buscar(setSetores, routeInfo.route)
    }, [])

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