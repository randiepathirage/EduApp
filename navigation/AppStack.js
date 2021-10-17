import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ContributionsStack from '../navigation/ContributionsStack';
import ExploreStack from '../navigation/ExploreStack';
import Profile from '../screens/Profile';
import SubscriptionStack from './SubscriptionStack';

const Tab = createMaterialBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Subscriptions"
            activeColor="#fff"
        >
            <Tab.Screen
                name="Subscriptions"
                component={SubscriptionStack}
                options={{
                    tabBarLabel: 'Favourites',
                    tabBarColor: '#689454',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-star" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Contributions"
                component={ContributionsStack}
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
                component={ExploreStack}
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
}

export default AppStack;