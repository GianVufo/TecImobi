import * as React from 'react';
//import { Button, View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/screens/TelaInicial';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false } }>

        <Stack.Screen name = "Home" component ={TelaInicial} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
