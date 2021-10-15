import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';
import Login from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MainTabScreen from './MainTabScreen';

const Stack = createStackNavigator();

const AuthStack = () => {

    // const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    // let routeName;

    // useEffect(() => {
    //     AsyncStorage.getItem('alreadyLaunched').then((value) => {
    //         if (value == null) {
    //             AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
    //             setIsFirstLaunch(true);
    //         } else {
    //             setIsFirstLaunch(true);
    //         }
    //     }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    // }, []);

    // if (isFirstLaunch === null) {
    //     return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    // } else if (isFirstLaunch == true) {
    //     routeName = 'SplashScreen';
    // } else {
    //     routeName = 'Login';
    // }

    return (
        <Stack.Navigator initialRouteName={'SplashScreen'}>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="HomePageScreen"
                component={MainTabScreen}
                options={{ headerBackVisible: false }}
            />
        </Stack.Navigator>
        // <AuthContext.Provider value={authContext}>
        //   <MainNavigation/>
        //   <NavigationContainer>
        //     {loginState.userToken !== null ? (
        //       <Drawer.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        //         <Drawer.Screen name="Login" component={MainTabScreen} />
        //         <Drawer.Screen name="Explore" component={Explore} />
        //       </Drawer.Navigator>
        //     ) :
        //       <RootStackScreen />
        //     }
        //   </NavigationContainer>
        // </AuthContext.Provider>
    );
}

export default AuthStack;

