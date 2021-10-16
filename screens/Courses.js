import React from 'react';
import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CourseCard from '../components/CourseCard';


const data1 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        categoryImage: '../assets/onboarding-img1.png',
        category: 'science'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        categoryImage: '../assets/logo.png',
        category: 'art',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        category: 'mathematics'
    },
];

const Courses = () => {
    return (
        <SafeAreaView style={styles.container}>
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
            {/* {entities && (
                    <View style={styles.listContainer}>
                        <FlatList data={entities} renderItem={renderEntity} keyExtractor={(item) => item.id} removeClippedSubviews={true} />
                    </View>
                )} */}


            <FlatList
                numColumns={2}
                data={data1}
                renderItem={itemdata => (
                    <CourseCard
                        id={itemdata.item.id}
                        title={itemdata.item.title}
                        category={itemdata.item.category}
                        onViewCourses={() => {
                            props.navigation.navigate('Courses', {
                                category: itemdata.category
                            });
                            console.log('Hello');
                        }}
                    />
                )}
            />

        </SafeAreaView>

    );
};

export default Courses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center'
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
    formContainer: {
        flexDirection: 'row',
        // height: 20,
        marginTop: 20,
        marginBottom: 10,
        //flex: 1,
        //paddingLeft: 10,
        //paddingRight: 10,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    input: {
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 10,
        flex: 1,
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
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
});
