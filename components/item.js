import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';


export default function Item({ item }) {
    return (
        <View style={styles.item}>
            <View>
                {/* item name */}
                <Image
                    style={styles.stretch}
                    source={{ uri: item.image }}
                />
                <Text style={styles.itemName}>{item.name}</Text>
            </View>
            <View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        PaddingTop: 20,
        // justifyContent: 'center',
    },
    stretch: {
        width: '100%',
        height: 200,
    },
    itemName: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }, 
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
});