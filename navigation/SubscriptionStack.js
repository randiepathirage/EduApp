import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ViewFavArticle from '../screens/ViewFavArticle'
import Subscriptions from '../screens/Subscriptions';

const Stack = createStackNavigator();

const SubscriptionStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Subscriptions'}>
            <Stack.Screen
                name="Subscriptions"
                component={Subscriptions}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="ViewFavArticle"
                component={ViewFavArticle}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    );
};

export default SubscriptionStack;
