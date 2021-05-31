import React, { useEffect, useState } from 'react';
import { useNavigationState } from '@react-navigation/native';
import {
    Modal,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import estilo from './estilo';
import { getIsDrawerOpenFromState } from '@react-navigation/drawer';

const Dashboard = ({ navigation, route}) => {
    const [open, setOpen] = useState(false);

    const teste = useNavigationState(state => state);
    const isOpen = getIsDrawerOpenFromState(teste);
    const menuName = route.params;
    
    const verify = () => {
        if(isOpen)
    }
    return(
        <SafeAreaView style={estilo.container}>
            {open == true && 
                <Modal
                    visible={open}
                    animationType='fade'
                    transparent={true}
                >
                    <View style={estilo.containerModal}>
                        <TouchableOpacity
                            onPress={() => {}}
                        >
                            <Text>fechar</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            }
        </SafeAreaView>
    );
}

export default Dashboard;