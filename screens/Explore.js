import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import CategoryCard from '../components/CategoryCard';


const data1 = [
    {
        id: '1',
        categoryImage: '../assets/onboarding-img1.png',
        category: 'Science'
    },
    {
        id: '2',
        categoryImage: '../assets/logo.png',
        category: 'Art',
    },
    {
        id: '3',
        category: 'Mathematics'
    },
    {
        id: '4',
        category: 'History'
    },
];

const Explore = props => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Explore</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Search'
                    placeholderTextColor='#aaaaaa'
                    //onChangeText={(text) => setEntityText(text)}
                    //value={entityText}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                <TouchableOpacity
                    style={styles.button}
                // onPress={onAddButtonPress}
                >
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                numColumns={2}
                data={data1}
                renderItem={itemdata => (
                    <CategoryCard
                        id={itemdata.item.id}
                        category={itemdata.item.category}
                        onViewCourses={() => {
                            props.navigation.navigate('Courses', {
                                articleCat: itemdata.item
                            });
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
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 23,
        color: '#689454',
        fontWeight: 'bold'
    },
    formContainer: {
        flexDirection: 'row',
        // height: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        alignSelf: 'flex-start'
        //flex: 1,
        //paddingLeft: 10,
        //paddingRight: 10,

    },
    input: {
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 10,
        marginRight: 5
    },
    button: {
        height: 30,
        borderRadius: 5,
        backgroundColor: '#689454',
        width: 65,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
});