import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function FormInput(props) {
    let { ...other } = props
    return (
        <TextInput
            style={styles.textInput} {...other} />
    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});