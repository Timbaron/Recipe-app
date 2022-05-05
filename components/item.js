import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';


export default function Item({ item, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item, navigation: navigation})}>
            <View style={styles.item}>
                <View style={styles.imageBox}>
                    {/* item name */}
                    <Image
                        style={styles.stretch}
                        source={{ uri: item.image }}
                    />
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemName}>{item.name}</Text>
                </View>
                <View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        PaddingTop: 20,
        // justifyContent: 'center',
    },
    stretch: {
        width: 200,
        height: 200,
        
    },
    imageBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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