import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function FormButton(props) {
    let {
        text,
        primary,
        ...other

    } = props

    let primaryStyle = tw`bg-blue-500 border-none px-6 py-3 rounded my-3`
    let SecondaryStyle = tw`border-blue-500 border bg-tranparent px-6 py-3 rounded my-3`

    let primaryText = tw`text-center text-white font-bold`
    let SecondaryText = tw`text-center text-blue-500 font-bold`

    return (
        <TouchableOpacity style={primary ? primaryStyle : SecondaryStyle} {...other}>
            <Text style={primary ? primaryText : SecondaryText}>{text}</Text>
        </TouchableOpacity>
    )
}
