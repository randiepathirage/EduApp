import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from './../firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ContributionCard from '../components/ContributionCard';


const data1 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        categoryImage: '../assets/onboarding-img1.png',
        content: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        category: 'science'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        content: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        categoryImage: '../assets/logo.png',
        category: 'art',

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        content: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        category: 'mathematics'
    },
];



export default function Contributions(props) {
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


    const onAddNewPress = () => {
        console.log(props.extraData)
        props.navigation.navigate('AddContribution')
    };

    return (
        <SafeAreaView>
            <Text style={styles.title}>Contributions</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onAddNewPress}
            >
                <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>

            {articles && (
                <View>
                    <FlatList
                        data={articles}
                        renderItem={itemdata => (
                            <ContributionCard
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
}

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
        color: '#05375a',
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        alignSelf: 'flex-start',
        height: 30,
        borderRadius: 5,
        backgroundColor: '#05375a',
        width: 75,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
});