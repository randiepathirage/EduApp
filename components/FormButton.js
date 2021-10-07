import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function FormButton(props) {
    let {
        text,
        primary,
        ...other

    } = props

    // let primaryStyle = tw`bg-white border-none px-6 py-3 rounded my-3`
    let SecondaryStyle = tw`border-blue-500 border bg-transparent px-6 py-3 rounded my-3`

    //let primaryText = tw`text-center text-teal-500 font-bold`
    let SecondaryText = tw`text-center text-white font-bold`

    return (
        <TouchableOpacity style={primary ? styles.primaryStyle : SecondaryStyle} {...other}>
            <Text style={primary ? styles.primaryText : SecondaryText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primaryStyle: {

        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    primaryText: {
        color: '#05676B',
        alignSelf: 'center',
        fontWeight: 'bold'
    }
});
