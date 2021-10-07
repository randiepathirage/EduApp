//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/Login';
import Register from './screens/Register';
import DetailsScreen from './screens/DetailsScreen'

import firebase from 'firebase';
import { config } from './firebaseconfig';

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


