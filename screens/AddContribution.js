import React, { useState } from 'react'
import { firebase } from './../firebaseconfig';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'

export default function AddContribution(props) {
    const [contriTitle, setContriTitle] = useState('');
    const [contributions, setContributions] = useState([]);

    const contributionRef = firebase.firestore().collection('contributions');

    //const userID = props.extraData.id;

    const onAddNewPress = () => {
        if (contriTitle && contriTitle.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then((_doc) => {
                    setEntityText('');
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    return (
        <SafeAreaView>
            <Text style={styles.title}>New Atricle</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.titleInput}
                    placeholder='Select Category'
                    placeholderTextColor='#aaaaaa'
                    //onChangeText={(text) => setContriTitle(text)}
                    //value={contriTitle}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.titleInput}
                    placeholder='Article Title'
                    placeholderTextColor='#aaaaaa'
                    //onChangeText={(text) => setContriTitle(text)}
                    //value={contriTitle}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Write Content'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setContriTitle(text)}
                    value={contriTitle}
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
            {/* {entities && (
                    <View style={styles.listContainer}>
                        <FlatList data={entities} renderItem={renderEntity} keyExtractor={(item) => item.id} removeClippedSubviews={true} />
                    </View>
                )} */}

        </SafeAreaView>
    )
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
        marginTop: 20,
        marginHorizontal: 10,
        fontSize: 23,
        color: '#05375a',
        fontWeight: 'bold'
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