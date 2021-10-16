import React from "react";

import { View, Text, Image, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContributionCard = props => {

    return (
        <TouchableOpacity
            style={styles.card}
            //onPress={props.onViewCourses}
            key={props.id}>

            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.category}> Category: {props.category}</Text>
        </TouchableOpacity>
    )

}

export default ContributionCard;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: '3%',
        marginBottom: 10,
        backgroundColor: '#5E98C2',
        borderRadius: 5,
        padding: 10
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '450',
        marginBottom: 5,
    },
    category: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '350',
        marginBottom: 5,
    }
});