import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Form from './form';
import Item from './item';
import Header from './header';

export default function App({ navigation }) {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [request, setRequest] = useState(false);
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.bodyText}>
                Search for your meal.
            </Text>
            <Form search={search} setSearch={setSearch} setRecipes={setRecipes} setRequest={setRequest} setIsLoading={setIsLoading} />
            <View style={styles.content}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    // if recipes is empty, show this message
                    recipes.length === 0 ? (
                        request == false ? (
                            <Text></Text>
                        ) : (
                            <Text style={styles.bodyText}>
                                No recipes found. Please try again.
                            </Text>
                        )
                    ) : (
                        <FlatList
                            data={recipes}
                            renderItem={({ item }) => <Item item={item} navigation={navigation} />}
                            keyExtractor={item => item.id}
                        />
                    )
                )}
            </View>
            <View style={styles.body}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'coral',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        backgroundColor: 'white',
        alignItems: 'center',
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
});
