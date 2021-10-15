import React from 'react';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Demo from '../screens/Demo';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <StackView.Navigator>
            <Stack.Screen name='Home' component={Demo} />
        </StackView.Navigator>
    );
}

export default AppStack;