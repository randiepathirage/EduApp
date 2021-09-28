import React from 'react'
import { TextInput } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function FormInput(props) {
    let { ...other } = props
    return (
        <TextInput
            style={tw`border border-blue-400 rounded px-3 py-2`} {...other} />
    )
}
