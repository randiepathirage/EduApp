import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Title from '../components/Title'
import Form from '../components/Form'
import tw from 'tailwind-react-native-classnames'
import Layout from './Layout'

import firebase from 'firebase'

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
        <Layout>
            <View style={tw`w-3/4`}>
                <Title text="Register" />
                {!!errorMeesage && <Text style={tw`bg-red-400 p-1 my-2 text-red-700`}>{errorMeesage}</Text>}
                {!!successMessage && <Text style={tw`bg-green-400 p-1 my-2 text-red-700`}>{successMessage}</Text>}
                <Form signup={true} onsubmit={register} />
            </View>
        </Layout>
    )
}

