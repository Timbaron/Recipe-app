import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import Details from './components/details';

const Stack = createNativeStackNavigator();

export default function App() {
  const screens = [
    {
      title: 'Home',
      component: Home,
      key: 1,
    },
    {
      title: 'Details',
      component: Details,
      key: 2,
    },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(({key,  title, component }) => (
          <Stack.Screen key={key} name={title} component={component} />
        ))}
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
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
