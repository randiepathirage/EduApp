import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import Login from './Login';
import Register from './Register';
import OnboardingScreen from './OnBoardingScreen'

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
    </RootStack.Navigator>
);

export default RootStackScreen;