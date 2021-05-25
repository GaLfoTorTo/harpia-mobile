import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutes from './DrawerRoutes';
import Login from '../Pages/Login/Login';
import HeaderButton from '../Components/Botao/HeaderButton';

const Stack = createStackNavigator();

const StackRoutes = ({navigation}) => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Dashboard'
                    component={DrawerRoutes}
                    options={{
                        title: false,
                        headerLeft: () => (<HeaderButton menuName='menu' />),
                        headerRight: () => (<HeaderButton menuName='list' />),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackRoutes;