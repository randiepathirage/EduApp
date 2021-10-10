//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'

import Login from './screens/Login';
import Register from './screens/Register';
import Courses from './screens/Courses'
import RootStackScreen from './screens/RootStackScreen';

import firebase from 'firebase';
import { config } from './firebaseconfig';
import MainTabScreen from './screens/MainTabScreen';

const LoginStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    } else {
      firebase.app()
    }
  }, [])
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Login" component={MainTabScreen} />
        <Drawer.Screen name="Register" component={RegisterStackScreen} />
        <Drawer.Screen name="Courses" component={Courses} /> 
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}


