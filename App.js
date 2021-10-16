import React, { useEffect, useState, useContext } from 'react';
//import Providers from './navigation';
//import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './navigation/AuthProvider';
import AuthStack from './navigation/AuthStack';
import "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from './navigation/AppStack';
import AddContribution from './screens/AddContribution';

const Stack = createStackNavigator();

export default function App() {

  const [token, setToken] = useState('');
  AsyncStorage.getItem('userToken')
    .then((value) => {
      setToken(value);
    })
  console.log(token)
  //const { user, setUser } = useContext(AuthContext);
  // const [initializing, setInitializing] = useState(true);

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; 
  // }, []);

  // if (initializing) return null;


  return (
    <AuthProvider>
      <NavigationContainer>
        {/* <AuthStack /> */}
        {/* <AppStack /> */}
        {token != 'null' ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthProvider>
  );
}
