import React, { createContext, useState } from 'react';
import { firebase } from './../firebaseconfig';
import Demo from './../screens/Demo'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await firebase.auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await firebase.auth().createUserWithEmailAndPassword(email, password)
                            .then((response) => {
                                const uid = response.user.uid;
                                const data = {
                                    id: uid,
                                    email,
                                };
                                const usersRef = firebase.firestore().collection('users');
                                usersRef
                                    .doc(uid)
                                    .set(data)
                                    .then(() => {
                                        navigation.navigate('Demo', { user: data });
                                    })
                                    .catch((error) => {
                                        alert(error);
                                    });
                            })
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await firebase.auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
};
