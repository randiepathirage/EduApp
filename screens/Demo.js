import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';

const Demo = ({ navigation }) => {
    return (
        <View>
            <Text> welcome</Text>
            <Button onPress={() => logout()}>
                Logout
            </Button>
        </View>
    );
};

export default Demo;
const styles = StyleSheet.create({});