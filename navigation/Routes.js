import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { AuthContext } from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {

    return (
        <NavigationContainer>
            {/* {user ? <AppStack /> : <AuthStack />} */}
            <AuthStack />
        </NavigationContainer>
    );
};

export default Routes;