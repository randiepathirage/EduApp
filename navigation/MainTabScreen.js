import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Subcriptions from '../screens/Subcriptions';
import Contributions from '../screens/Contributions';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Profile from '../screens/Profile';

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
