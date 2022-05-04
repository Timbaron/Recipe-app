import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Form({search, setSearch, setRecipes, setIsLoading}) {

        const getRecipiesFromApiAsync = async () => {
            try {
                const response = await fetch(
                    'https://api.spoonacular.com/recipes/complexSearch?apiKey=2e56c9010ca2488d9541410d2d3863bc&query=' + search,
                                     
                );
                const json = await response.json();
                console.log(json.results);
                setRecipes(json.results);
            } catch (error) {
                Alert.alert('Error', error.message, [{text: 'OK'}]);
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
    // useEffect(() => {
    //     getRecipiesFromApiAsync();
    // }, []);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                label="Search for your meadl"
                value={search}
                onChangeText={(val) => setSearch(val)}
                placeholder="Search for your meal" />
            <TouchableOpacity onPress={getRecipiesFromApiAsync} style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: 300,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 20,
        textAlign: 'center',
        Color: 'white',
        fontSize: 20
    },
    button: {
        backgroundColor: 'darksalmon',
        width: 200,
        height: 50,
        marginTop: 15,
        Color: 'white',
        textAlign: 'center',
        padding: 10,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
})