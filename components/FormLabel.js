import React from 'react'
import { Text, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function FormLabel({ text }) {
    return (
        <Text style={styles.text_footer}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },


});

