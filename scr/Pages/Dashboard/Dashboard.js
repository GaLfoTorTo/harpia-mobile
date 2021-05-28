import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import MenuModal from '../../Components/MenuModal/MenuModal';
import estilo from './estilo';

const Dashboard = ({navigation}) => {

    const [open, setOpen] = useState(false);
    
    return(
        <SafeAreaView style={estilo.container}>
            {open == true && 
                <MenuModal open={open}/>
            }
        </SafeAreaView>
    );
}

export default Dashboard;