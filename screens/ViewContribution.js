import React, { useState, useEffect } from 'react'
import { firebase } from './../firebaseconfig';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const ViewContribution = ({ route, navigation }) => {
    const [contriTitle, setContriTitle] = useState('');
    const [contriCat, setContriCat] = useState('');
    const [content, setContent] = useState('');

    const { arti, artiId } = route.params;
    console.log(arti)

    const articleRef = firebase.firestore().collection('Articles');

    useEffect(() => {
        setContriCat(arti.category)
        setContent(arti.content)
        setContriTitle(arti.title)
    }, []);

    const onUpdatePress = props => {
        if (contriCat.length > 0 && contriTitle.length > 0 && content.length > 0) {
            const data = {
                title: contriTitle,
                category: contriCat,
                content: content,
            };
            articleRef
                .doc(artiId)
                .update(data)
                .then(() => {
                    navigation.navigate('Contributions')
                })
                .catch((error) => {
                    alert(error);
                });
        }
    };

    const onBackPress = () => {
        navigation.navigate('Contributions')
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
                <Text style={styles.title}>Update Atricle</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.titleInput}
                    placeholder="Category"
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
                    onPress={onUpdatePress}
                >
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default ViewContribution;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
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