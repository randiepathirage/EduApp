import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Contributions(props) {


    const onAddNewPress = () => {
        console.log(props.extraData)
        props.navigation.navigate('AddContribution')
    };

    return (
        <SafeAreaView>
            <Text style={styles.title}>Contributions</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onAddNewPress}
            >
                <Text style={styles.buttonText}>Add New</Text>
            </TouchableOpacity>

            {/* {entities && (
                    <View style={styles.listContainer}>
                        <FlatList data={entities} renderItem={renderEntity} keyExtractor={(item) => item.id} removeClippedSubviews={true} />
                    </View>
                )} */}

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        alignSelf: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 23,
        color: '#05375a',
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        alignSelf: 'flex-start',
        height: 30,
        borderRadius: 5,
        backgroundColor: '#05375a',
        width: 75,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
});