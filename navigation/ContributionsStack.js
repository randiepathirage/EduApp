import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Contributions from '../screens/Contributions';
import AddContribution from '../screens/AddContribution';

const Stack = createStackNavigator();

const ContributionsStack = () => {
    return (
        <Stack.Navigator initialRouteName={'Contributions'}>
            <Stack.Screen
                name="Contributions"
                component={Contributions}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="AddContribution"
                component={AddContribution}
                options={{ header: () => null }}
            />
        </Stack.Navigator>
    );
};

export default ContributionsStack;
