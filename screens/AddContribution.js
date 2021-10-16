import React, { useState } from 'react'
import { firebase } from './../firebaseconfig';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AddContribution(props) {
    const [contriTitle, setContriTitle] = useState('');
    const [contriCat, setContriCat] = useState('');
    const [content, setContent] = useState('');

    const articleRef = firebase.firestore().collection('Articles');

    const [token, setToken] = useState('');
    AsyncStorage.getItem('userToken')
        .then((value) => {
            setToken(value);
        })

    const onAddNewPress = () => {
        if (contriCat.length > 0 && contriTitle.length > 0 && content.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                title: contriTitle,
                category: contriCat,
                content: content,
                authorID: token,
                createdAt: timestamp,
            };
            articleRef
                .add(data)
                .then((_doc) => {
                    setContriTitle('');
                    setContriCat('');
                    setContent('');
                    props.navigation.navigate('Contributions')
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    const onBackPress = () => {
        props.navigation.navigate('Contributions')
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Icon style={styles.icons}
                    name="ios-chevron-back"
                    color='#05375a'
                    size={24}
                    onPress={onBackPress}
                />
                <Text style={styles.title}>New Atricle</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.titleInput}
                    placeholder='Select Category'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setContriCat(text)}
                    value={contriCat}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.titleInput}
                    placeholder='Article Title'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setContriTitle(text)}
                    value={contriTitle}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Write Content'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setContent(text)}
                    value={content}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={onAddNewPress}
                >
                    <Text style={styles.buttonText}>Add New</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        alignSelf: 'flex-start',
        marginTop: 20,
        fontSize: 23,
        color: '#05375a',
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
        height: 100,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 10,
        marginRight: 10,
        marginBottom: 10
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
        backgroundColor: '#05375a',
        width: 73,
        alignItems: "center",
        alignSelf: 'flex-end',
        marginRight: 10,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
});