import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Restart } from 'fiction-expo-restart';

const Profile = props => {

    const onLogout = () => {
        AsyncStorage.setItem('userToken', null)
        Restart();
    };

    const [token, setToken] = useState('');
    const user = AsyncStorage.getItem('userToken')
        .then((value) => {
            setToken(value);
        })
    console.log(user.uid)

    return (
        <SafeAreaView>
            <Text style={styles.title}>Profile</Text>
            <Text>{token}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onLogout}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

            {/* {entities && (
                    <View style={styles.listContainer}>
                        <FlatList data={entities} renderItem={renderEntity} keyExtractor={(item) => item.id} removeClippedSubviews={true} />
                    </View>
                )} */}

        </SafeAreaView>
    );
};

export default Profile;

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
        width: 73,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
});