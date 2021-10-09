import * as React from 'react';
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Contributions() {
    return (
        <View>
            <Text>Contributions</Text>
        </View>

    );
}