import React, { useState, useContext } from 'react'
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage';

import firebase from 'firebase'


export default function Login(props) {

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    //const { signIn } = React.useContext(AuthContext);

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

    // const loginHandler = (email, password) => {
    //     if (!email || !password) {
    //         //  alert("Please enter all the required fields")
    //     } else {
    //         signIn(email, password)

    //         // firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    //         //     .then(user => {
    //         //         alert(`User logged in successfully, ${user.user.uid}`)
    //         //         navigation.navigate('Explore')
    //         //     }).catch(err => alert(err.message))
    //     }
    // }

    const login = async (email, password) => {
        if (!email || !password) {
            alert("Please enter all the required fields")
        } else {

            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((response) => {
                    const uid = response.user.uid;

                    //adding to async storage 
                    AsyncStorage.setItem('userToken', uid)
                    AsyncStorage.setItem('email', email)
                    const usersRef = firebase.firestore().collection('users');
                    usersRef
                        .doc(uid)
                        .get()
                        .then((firestoreDocument) => {
                            if (!firestoreDocument.exists) {
                                alert('User does not exist anymore.');
                                return;
                            }
                            const user = firestoreDocument.data();
                            //navigation.replace('Demo', { user: user });
                            console.log(user)
                            props.navigation.replace('Home', { user: user });
                        })
                        .catch((error) => {
                            alert(error);
                        });
                })
                .catch((error) => {
                    alert(error);
                });







        }
    }


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor='#689454' barStyle="light-content" />

            <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
            />

            {/* header */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome Back!</Text>
            </View>

            {/* footer */}
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
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
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.forgotButton}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => login(data.email, data.password)}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Login</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Register')}
                        style={[styles.signIn, {
                            borderColor: '#05375a',
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >

                        <Text style={[styles.textSign, {
                            color: '#05375a'
                        }]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}


const { height } = Dimensions.get("screen");
const height_logo = height * 0.20;

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
        fontSize: 30,
        alignSelf: 'center'
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
    },
    logo: {
        width: height_logo,
        height: height_logo,
        alignSelf: 'center',
        marginTop: 20

    },
    forgotButton: {
        marginTop: 2,
        color: '#05375a',
        alignSelf: 'flex-end'
    }
});





