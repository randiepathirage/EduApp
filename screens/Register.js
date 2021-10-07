import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Title from '../components/Title'
import Form from '../components/Form'
import tw from 'tailwind-react-native-classnames'

import firebase from 'firebase'

import logo from './../assets/logo.png'

export default function Register() {
    const [errorMeesage, setError] = useState(""),
        [successMessage, setSuccess] = useState("")

    const register = (email, password) => {
        if (!email || !password) {
            alert("Please enter all the required fields")
        } else {
            firebase.auth().
                createUserWithEmailAndPassword(email, password)
                .then(user => {
                    setSuccess("User registered successfully")
                    setError("")
                }).catch(err => setError(err.message))
        }
    }
    return (

        <View style={tw`w-3/4`, styles.container}>
            <Image source={logo} style={{ width: 159, height: 159 }} />
            <Title text="Register" />
            {!!errorMeesage && <Text style={tw`bg-red-400 p-1 my-2 text-red-700`}>{errorMeesage}</Text>}
            {!!successMessage && <Text style={tw`bg-green-400 p-1 my-2 text-red-700`}>{successMessage}</Text>}
            <Form signup={true} onsubmit={register} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#05676B',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


