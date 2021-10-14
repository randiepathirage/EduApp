import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableHighlight } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoryCard from '../components/CategoryCard';

const Tab = createBottomTabNavigator();

const data1 = [
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

const Explore = props => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={data1}
                renderItem={itemdata => (
                    <CategoryCard
                        id={itemdata.item.id}
                        title={itemdata.item.title}
                        category={itemdata.item.category}
                        onViewDetail={() => {
                            props.navigation.navigate('Courses');
                            // , {
                            // product: itemData.item,
                            // productId: idList[itemData.index],
                            //  });
                            console.log('Hello');
                        }}
                    />
                )}
            />

        </SafeAreaView>

    );
}

export default Explore;

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