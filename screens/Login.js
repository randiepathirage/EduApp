import React, { useState } from 'react'
import { Button, View, Text, Image, StyleSheet } from 'react-native'
import Title from '../components/Title'
import Form from '../components/Form'
import tw from 'tailwind-react-native-classnames'

import firebase from 'firebase'

import logo from './../assets/logo.png'

export default function Login({ navigation }) {
    const [errorMeesage, setError] = useState(""),
        [successMessage, setSuccess] = useState("")

    const login = (email, password) => {
        if (!email || !password) {
            alert("Please enter all the required fields")
        } else {

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    setError("")
                    setSuccess(`User logged in successfully, ${user.user.uid}`)

                }).catch(err => setError(err.message))
        }
    }

    return (

        <View style={tw`w-3/4`, styles.container}>
            <Image source={logo} style={{ width: 159, height: 159, alignSelf: 'center' }} />
            <Title text="Login" />
            {!!errorMeesage && <Text style={tw`bg-red-400 p-1 my-2 text-red-700`}>{errorMeesage}</Text>}
            {!!successMessage && <Text style={tw`bg-green-400 p-1 my-2 text-red-700`}>{successMessage}</Text>}
            <Form signup={false} onsubmit={login} />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')} />

        </View>

    )
}

const styles = StyleSheet.create({
    error: {
        flex: 1,
        width: "100%",
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    success: {
        flex: 1,
        width: "100%",
        backgroundColor: '#05676B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#05676B',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

