import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, 
  TouchableOpacity, TextInput, Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Formulario from './src/login/Formulario';
import styles from './Estilo'
import Janela4 from './src/janelas/janela4';
import Janela1 from './src/janelas/janela1';
import Janela2 from './src/janelas/janela2';
import Entrada from './src/componentes/Entrada';
import Login from './src/login/Login';
import Home from './src/janelas/Home';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Janela1'>
        <Stack.Screen name="Janela1" component={Janela1}
          options={{title:"Primeira Janela", 
            headerTintColor:'#ff00ff55',
            statusBarColor:'blue', 
            navigationBarColor:'green'}} />
        <Stack.Screen name="Janela2" component={Janela2} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Janela4" component={Janela4} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


