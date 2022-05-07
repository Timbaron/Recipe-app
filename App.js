import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';
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
  // function LogoTitle() {
  //   return (
  //     <Image
  //       style={{ width: 70, height: 50 }}
  //       source={ require('./assets/logo.jpg') }
  //     />
  //   );
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        //   headerTitle: () => <LogoTitle />
        // }}
      >
        {screens.map(({key,  title, component }) => (
          <Stack.Screen key={key} name={title} component={component}
            options={{
              headerShown: false,
            }}
          />
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
