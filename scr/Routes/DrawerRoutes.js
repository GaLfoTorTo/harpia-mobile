import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Sidebar from '../Components/Sidebar/Sidebar';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {


    return(
        <Drawer.Navigator
            drawerContent={() => (<Sidebar />)}
            edgeWidth={200}
        >
            <Drawer.Screen 
                name='Dashboard'
                component={Dashboard}
            />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;