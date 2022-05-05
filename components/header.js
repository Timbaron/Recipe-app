import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}><Text style={styles.big}>R</Text>ecipes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    big: {
        fontSize: 30,
        fontFamily: "Arial",
        fontStyle: 'italic',
        color: 'blue',
    },
})