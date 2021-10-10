import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Subcriptions from './Subcriptions';
import Contributions from './Contributions';
import Courses from './Courses';
import Login from './Login';

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
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Contributions"
            component={Contributions}
            options={{
                tabBarLabel: 'Contributions',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-notifications" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Courses"
            component={Courses}
            options={{
                tabBarLabel: 'Courses',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />

        <Tab.Screen
            name="Home"
            component={LoginStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
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
