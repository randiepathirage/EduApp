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
            onPress={props.onViewCourses}
            key={props.id}>
            {
                props.category == 'Science' ?
                    <Image
                        style={styles.cardImage}
                        source={require(`../assets/science.png`)}
                    /> :
                    props.category == 'Art' ?
                        <Image
                            style={styles.cardImage}
                            source={require(`../assets/art.png`)}
                        /> :
                        props.category == 'Mathematics' ?
                            <Image
                                style={styles.cardImage}
                                source={require(`../assets/maths.png`)}
                            /> :
                            <Image
                                style={styles.cardImage}
                                source={require(`../assets/history.png`)}
                            />

            }

            <Text style={styles.title}>{props.category}</Text>
        </TouchableOpacity>
    )

}

export default CategoryCard;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        margin: '3%',
        backgroundColor: '#90BD7B',
        borderRadius: 5
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 10,
    },
    cardImage: {
        width: 135,
        height: 105,
        marginTop: 10,
        marginHorizontal: 10
    }
});