import React, { useState } from 'react'
import { View, Platform, StyleSheet } from 'react-native'
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
        screen = signup ? "Login" : "Register"

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

            <FormButton primary={true} text={!signup ? "LOGIN" : "REGISTER"}
                onPress={() => onsubmit(email, password)} />

            <FormButton primary={false} text={signup ? "LOGIN" : "REGISTER"}
                onPress={() => navigation.navigate(screen)} />

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05676B',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});