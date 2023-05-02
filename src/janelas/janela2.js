import React, {useState, useEffect} from "react";
import { View,Text, TextInput, TouchableOpacity} from "react-native";
import styles from '../../Estilo';

// Janela 2
const Janela2 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Segunda Janela</Text>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Formulario')}}
          style={styles.botao}
          >
          <Text>ACESSAR FORMULÁRIO</Text>
        </TouchableOpacity>
      </View>
    )
  }

  export default Janela2