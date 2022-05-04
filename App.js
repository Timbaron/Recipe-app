import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Form from './components/form';

export default function App() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}><Text style={styles.big}>R</Text>ecipes</Text>
      </View>
      <Text style={styles.bodyText}>
        Search for your meal.
      </Text>
      <Form search={search} setSearch={setSearch} setRecipes={setRecipes} setIsLoading={setIsLoading} />
      <View style={styles.content}>
        {isLoading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          <Text>{}</Text>
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
