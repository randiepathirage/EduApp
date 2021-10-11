//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  View,
  ActivityIndicator
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import Courses from './screens/Courses';

import firebase from 'firebase';
import { config } from './firebaseconfig';
import { AuthContext } from './components/context';

const LoginStack = createNativeStackNavigator();
const RegisterStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (email, password) => {
      // setUserToken('dfdf');
      // setIsLoading(false);
      let userToken = null;
      if (email == "randie" && password == "123") {

        try {
          userToken = "sdsdsds";
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }

      }
      //const userToken = String(foundUser[0].userToken);
      // const userName = foundUser[0].username;


      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: email, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('dfdf');
      // setIsLoading(false);
    },
  }), []);

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    } else {
      firebase.app()
    }
    setTimeout(async () => {
      //setIsLoading(false);
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    // <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Login" component={MainTabScreen} />
            <Drawer.Screen name="Courses" component={Courses} />
          </Drawer.Navigator>
        ) :
          <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
    // </PaperProvider>
  );
}


