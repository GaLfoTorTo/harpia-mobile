import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutes from './DrawerRoutes';
import Login from '../Pages/Login/Login';
import HeaderButton from '../Components/Botao/HeaderButton';
import Listagem from '../Pages/Listagem/Listagem';
import Form from '../Pages/Form/Form';

const Stack = createStackNavigator();

const StackRoutes = ({navigation}) => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Dashboard'
                    component={DrawerRoutes}
                    options={{
                        title: false,
                        headerRight: () => (<HeaderButton menuName='cogs' />),
                        headerLeft: () => (<HeaderButton menuName='bars' />),
                    }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Listagem'
                    component={Listagem}
                />
                <Stack.Screen
                    name='Form'
                    component={Form}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackRoutes;