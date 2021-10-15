import React, { useEffect, useState, useContext } from 'react';
//import Providers from './navigation';
//import firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './navigation/AuthProvider';
import AuthStack from './navigation/AuthStack';
import Demo from './screens/Demo';
import "firebase/auth"
import { AuthContext } from './navigation/AuthProvider';
import { firebase } from './firebaseconfig';
import AppStack from './navigation/AppStack';

export default function App() {

  // const { user, setUser } = useContext(AuthContext);
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
        <AuthStack />
        {/* {user ? <Demo /> : <AuthStack />} */}
      </NavigationContainer>
    </AuthProvider>
  );
}
