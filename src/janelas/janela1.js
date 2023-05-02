import React, {useState, useEffect} from "react";
import { View,Text, TextInput, TouchableOpacity} from "react-native";
import styles from '../../Estilo';

// Janela 1
const Janela1 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>PRIMEIRA JANELA</Text>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Janela2')}}
          style={styles.botao}
          >
          <Text>TROCAR DE JANELA</Text>
        </TouchableOpacity>
      </View>
    )
  }

  export default Janela1