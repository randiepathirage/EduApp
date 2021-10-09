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

import firebase from 'firebase';
import { config } from './firebaseconfig';
import MainTabScreen from './screens/MainTabScreen';

const LoginStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStackScreen = ({ navigation }) => (

  <LoginStack.Navigator
    initialRouteName="login"
    activeColor="#fff"
  >
    <LoginStack.Screen
      name="login"
      component={Login}
      options={{
        title: 'Login',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            backgroundColor='#fff'
            size={26}
            onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />
  </LoginStack.Navigator>

);

const RegisterStackScreen = ({ navigation }) => (

  <RegisterStack.Navigator
    initialRouteName="detail"
    activeColor="#fff"
  >
    <RegisterStack.Screen
      name="detail"
      component={Register}
      options={{
        title: 'Register',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            backgroundColor='#fff'
            size={26}
            onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />
  </RegisterStack.Navigator>

);


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
      <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="Register" component={RegisterStackScreen} />
        <Drawer.Screen name="Courses" component={Courses} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


