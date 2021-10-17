import React from "react";

import { View, Text, Image, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CourseCard = props => {

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={props.onViewArticle}
            key={props.id}>

            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.category}> Category: {props.category}</Text>
        </TouchableOpacity>
    )

}

export default CourseCard;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: '3%',
        marginBottom: 10,
        backgroundColor: '#90BD7B',
        borderRadius: 5,
        padding: 10
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
    },
    category: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 5,
    }
});