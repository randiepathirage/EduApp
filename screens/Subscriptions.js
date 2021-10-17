import React, { useState, useEffect } from 'react';
import { firebase } from '../firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavCard from '../navigation/FavCard';

export default function Subscriptions({ navigation }) {

    const [favArticles, setFavArticles] = useState([]);
    const [idList, setIdList] = useState([]);

    const favRef = firebase.firestore().collection('Favourites');

    const [token, setToken] = useState('');
    AsyncStorage.getItem('userToken')
        .then((value) => {
            setToken(value);
        })

    useEffect(() => {
        const retrieveToken = async () => {
            const val = await AsyncStorage.getItem('userToken')
            favRef
                .where('userID', '==', val)
                .onSnapshot(
                    querySnapshot => {
                        const list = [];
                        const idL = [];
                        querySnapshot.forEach(documentSnapshot => {
                            list.push(documentSnapshot.data());
                            idL.push(documentSnapshot.id);
                        });
                        setFavArticles(list);
                        setIdList(idL);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        retrieveToken();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Favourites</Text>
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

            {favArticles && (
                <View>
                    <FlatList
                        data={favArticles}
                        renderItem={itemdata => (
                            <FavCard
                                id={itemdata.item.id}
                                title={itemdata.item.title}
                                category={itemdata.item.category}
                                content={itemdata.item.content}
                                onViewFavArticle={() => {
                                    navigation.navigate('ViewFavArticle', {
                                        arti: itemdata.item,
                                        artiId: idList[itemdata.index],
                                    });
                                }}
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