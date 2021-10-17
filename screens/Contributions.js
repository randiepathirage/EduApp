import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebase } from './../firebaseconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ContributionCard from '../components/ContributionCard';


export default function Contributions(props) {
    const [articles, setArticles] = useState([]);
    const [idList, setIdList] = useState([]);

    const articleRef = firebase.firestore().collection('Articles');

    useEffect(() => {
        const retrieveToken = async () => {
            const val = await AsyncStorage.getItem('userToken')
            articleRef
                .where('authorID', '==', val)
                .onSnapshot(
                    querySnapshot => {
                        const list = [];
                        const idL = [];
                        querySnapshot.forEach(documentSnapshot => {
                            list.push(documentSnapshot.data());
                            idL.push(documentSnapshot.id);
                        });
                        setArticles(list);
                        setIdList(idL);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        retrieveToken();
    }, []);


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

            {articles && (
                <View>
                    <FlatList
                        data={articles}
                        renderItem={itemdata => (
                            <ContributionCard
                                id={itemdata.item.id}
                                title={itemdata.item.title}
                                category={itemdata.item.category}
                                content={itemdata.item.content}
                                onViewContribution={() => {
                                    props.navigation.navigate('ViewContribution', {
                                        //category: itemdata.item.category,
                                        //    title: itemdata.item.title,
                                        //   content: itemdata.item.content
                                        arti: itemdata.item,
                                        artiId: idList[itemdata.index],
                                    });
                                }}
                            />
                        )}
                    />
                </View>
            )}

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