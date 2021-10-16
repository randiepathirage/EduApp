import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoryCard from '../components/CategoryCard';

const Tab = createBottomTabNavigator();

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        categoryImage: '../assets/logo.png',
        category: 'science'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        category: 'art'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        category: 'mathematics'
    },
];

export default function Subcriptions(props) {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (<CategoryCard categoryCard={item} />)}
                keyExtractor={item => item.id}
            />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});