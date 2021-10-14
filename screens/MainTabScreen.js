import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Subcriptions from './Subcriptions';
import Contributions from './Contributions';
import Explore from './Explore';
import Login from './Login';
import Profile from './Profile';

const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Subcriptions"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Subcriptions"
            component={Subcriptions}
            options={{
                tabBarLabel: 'Subcriptions',
                tabBarColor: '#689454',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-star" color={color} size={24} />
                ),
            }}
        />
        <Tab.Screen
            name="Contributions"
            component={Contributions}
            options={{
                tabBarLabel: 'Contributions',
                tabBarColor: '#05375a',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-code" color={color} size={24} />
                ),
            }}
        />
        <Tab.Screen
            name="Explore"
            component={Explore}
            options={{
                tabBarLabel: 'Explore',
                tabBarColor: '#689454',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-search" color={color} size={24} />
                ),
            }}
        />

        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#05375a',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={24} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

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
