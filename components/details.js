import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Header from './header';

export default function Details({ route }) {
    const { item } = route.params;
    const { width } = useWindowDimensions();
    const source = {
        html: item.content
    }
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.bodyText}>{item.name}</Text>

            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image }}
                />

                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>Directions</Text>
                    <RenderHtml
                        contentWidth={width}
                        source={source}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'coral',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        width: 500,
        height: 300,
        backgroundColor: 'darksalmon',
        borderRadius:15,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        // textAlign: 'center',
        justifyContent: 'center',
    },
    bodyText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {        
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    image: {
        width: 200, 
        height: 200, 
        borderRadius: 10,
        marginBottom: 20,
    },
    bodyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
    }
})