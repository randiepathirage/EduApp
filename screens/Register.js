import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import firebase from 'firebase'

export default function Register({ navigation }) {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_password: '',
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const register = () => {
        if (!data.email || !data.password) {
            alert("Please enter all the required fields")
        } else {
            firebase.auth().
                createUserWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    //alert("hareeeeee")
                    navigation.navigate('Login')

                }).catch(err => alert(err.message))
        }
    }
    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#689454' barStyle="light-content" />

            {/* header */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Create New Account</Text>
            </View>

            {/* footer */}
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>

                    {/* password */}
                    <View style={[styles.action, {
                        marginTop: 35
                    }]}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.action, {
                        marginTop: 35
                    }]}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={register}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Register</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            style={[styles.signIn, {
                                borderColor: '#05375a',
                                backgroundColor: '#fff',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#05375a'
                            }]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#689454',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#05375a'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});


