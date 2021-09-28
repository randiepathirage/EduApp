//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Register from './screens/Register';

import firebase from 'firebase';
import { config } from './firebaseConfig';

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
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


