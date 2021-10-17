import React, { useState, useEffect } from 'react'
import { firebase } from './../firebaseconfig';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { Restart } from 'fiction-expo-restart';

const ViewArticle = ({ route, navigation }) => {
    const [title, setTitle] = useState('');
    const [cat, setCat] = useState('');
    const [content, setContent] = useState('');

    const { arti, artiId } = route.params;

    const favRef = firebase.firestore().collection('Favourites');

    const [token, setToken] = useState('');
    AsyncStorage.getItem('userToken')
        .then((value) => {
            setToken(value);
        })

    useEffect(() => {
        setCat(arti.category)
        setContent(arti.content)
        setTitle(arti.title)
    }, []);

    const onAddFavPress = () => {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            title: title,
            category: cat,
            content: content,
            userID: token,
            createdAt: timestamp,
        };
        favRef
            .add(data)
            .then((_doc) => {
                navigation.navigate('Explore')
                Restart();
            })
            .catch((error) => {
                alert(error);
            });

    };

    const onBackPress = () => {
        navigation.navigate('Explore')
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
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.formContainer}>

                <Text style={styles.input}>{content}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onAddFavPress}
                >
                    <Text style={styles.buttonText}>Add To Fav</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ViewArticle;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    item: {
        backgroundColor: '#689454',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        alignSelf: 'flex-start',
        marginTop: 20,
        fontSize: 23,
        color: '#689454',
        fontWeight: 'bold'
    },
    icons: {
        marginTop: 25,
        marginHorizontal: 10,
    },
    formContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        //flex: 1,
        //paddingLeft: 10,
        //paddingRight: 10,

    },
    input: {
        borderRadius: 5,
        height: 300,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginRight: 10,
        marginBottom: 10,
        padding: 20
    },
    titleInput: {
        height: 35,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    button: {
        height: 30,
        borderRadius: 5,
        backgroundColor: '#689454',
        width: 90,
        alignItems: "center",
        alignSelf: 'flex-end',
        marginRight: 10,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
});