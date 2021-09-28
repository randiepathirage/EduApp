import React, { useState } from 'react'
import { View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import FormLabel from './FormLabel'
import FormInput from './FormInput'
import FormButton from './FormButton'
import { useNavigation } from '@react-navigation/core'

const FormInputGroup = ({ children }) => {
    return (
        <View style={tw`my-3`}>
            {children}
        </View>
    )
}

export default function Form({ signup, onsubmit }) {
    const navigation = useNavigation(),
        screen = signup ? "Home" : "Register"

    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("")
    return (
        <View>
            <FormInputGroup>
                <FormLabel text="Email" />
                <FormInput onChangeText={(text) => setEmail(text)}
                    vlaue={email}
                />
            </FormInputGroup>

            <FormInputGroup>
                <FormLabel text="Password" />
                <FormInput onChangeText={(text) => setPassword(text)}
                    vlaue={password}
                    secureTextEntry={true}
                />
            </FormInputGroup>

            <FormButton primary={true} text={!signup ? "Login" : "Register"}
                onPress={() => onsubmit(email, password)} />

            <FormButton primary={false} text={signup ? "Login" : "Register"}
                onPress={() => navigation.navigate(screen)} />
        </View>

    )
}
