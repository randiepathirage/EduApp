import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from './../firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CourseCard from '../components/CourseCard';
import Icon from 'react-native-vector-icons/Ionicons';

const Courses = props => {

    const [articles, setArticles] = useState([]);
    const [idList, setIdList] = useState([]);

    const articleRef = firebase.firestore().collection('Articles');

    const [token, setToken] = useState('');
    AsyncStorage.getItem('userToken')
        .then((value) => {
            setToken(value);
        })
    console.log(token)

    useEffect(() => {
        articleRef
            // .where('authorID', '=', token)
            .onSnapshot(
                querySnapshot => {
                    const list = [];
                    const idL = [];
                    querySnapshot.forEach(documentSnapshot => {
                        list.push(documentSnapshot.data());
                        idL.push(documentSnapshot.id);
                    });
                    setArticles(list);
                    setIdList(idL);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);

    const onBackPress = () => {
        props.navigation.navigate('Explore')
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Icon style={styles.icons}
                    name="ios-chevron-back"
                    color='#689454'
                    size={24}
                    onPress={onBackPress}
                />
                <Text style={styles.title}>Art</Text>
            </View>
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

            {articles && (
                <View>
                    <FlatList
                        data={articles}
                        renderItem={itemdata => (
                            <CourseCard
                                id={itemdata.item.id}
                                title={itemdata.item.title}
                                category={itemdata.item.category}
                                content={itemdata.item.content}
                            // onViewCourses={() => {
                            //     props.navigation.navigate('Courses', {
                            //         category: itemdata.category
                            //     });
                            //     console.log('Hello');
                            // }}
                            />
                        )}
                    />
                </View>
            )}

        </SafeAreaView>

    );
};

export default Courses;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    icons: {
        marginTop: 25,
        marginHorizontal: 10,
    },
    title: {
        alignSelf: 'flex-start',
        marginTop: 20,
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
});
