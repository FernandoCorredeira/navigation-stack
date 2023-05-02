import React, {useState, useEffect} from "react";
import { View,Text, TextInput, TouchableOpacity} from "react-native";
import styles from '../../Estilo';

// Janela 4
const Janela4 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>QUARTA JANELA</Text>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Janela1')}}
          style={styles.botao}
          >
          <Text>TROCAR DE JANELA</Text>
        </TouchableOpacity>
      </View>
    )
  }

  export default Janela4