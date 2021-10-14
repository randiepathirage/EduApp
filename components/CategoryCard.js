import React from "react";

import { View, Text, Image, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCard = props => {

    // const handlePress = (id) => {
    //     const pressedCategory = data.find(cat => {
    //         return cat.id === id;
    //     });
    //     //console.log("sdsdsdsd")
    //     //alert(pressedCategory.category)
    //     navigation.navigate('Login')
    // }
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={props.onViewDetail}
            key={props.id}>
            <Image style={{ width: 159, height: 150 }} source={{ url: props.categoryImage }} />
            <Text>{props.title}</Text>
            <Text>{props.category}</Text>
        </TouchableOpacity>
    )

}

export default CategoryCard;

const styles = StyleSheet.create({
    card: {
        width: '49%',
        alignItems: 'center',
        margin: '1%',
        borderWidth: 0.75,
        backgroundColor: 'grey'
    }
});