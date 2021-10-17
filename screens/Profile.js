import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restart } from 'fiction-expo-restart';

const Profile = props => {

    const onLogout = () => {
        AsyncStorage.setItem('userToken', null)
        Restart();
    };

    const [token, setToken] = useState('');
    const user = AsyncStorage.getItem('userToken')
        .then((value) => {
            setToken(value);
        })
    console.log(user.uid)

    const [email, setEmail] = useState('');
    AsyncStorage.getItem('email')
        .then((value) => {
            setEmail(value);
        })

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Image
                source={require('../assets/avatar.png')}
                style={styles.avatar} />
            <Text style={styles.details}>USER ID: {token}</Text>
            <Text style={styles.details}>EMAIL: {email}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onLogout}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default Profile;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    avatar: {
        width: height_logo,
        height: height_logo,
        alignSelf: 'center',
        marginTop: 20

    },
    details: {
        margin: 10,
        color: '#05375a',
        fontSize: 15,
        fontWeight: 'bold'
    },
    title: {
        marginTop: 35,
        fontSize: 23,
        color: '#05375a',
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#05375a',
        width: 73,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
});