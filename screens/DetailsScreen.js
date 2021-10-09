import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Login';
import Register from './Register';

const Tab = createBottomTabNavigator();

export default function DetailsScreen() {
    return (

        <Tab.Navigator >
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>

    );
}