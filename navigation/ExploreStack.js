import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Explore from '../screens/Explore'
import Courses from '../screens/Courses';
import ViewArticle from '../screens/ViewArticle'

const Stack = createStackNavigator();

const ExploreStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Explore'}>
            <Stack.Screen
                name="Explore"
                component={Explore}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Courses"
                component={Courses}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="ViewArticle"
                component={ViewArticle}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    );
};

export default ExploreStack;
