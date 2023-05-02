import React, {useState, useEffect} from "react";
import { View,Text, TextInput, TouchableOpacity} from "react-native";
import Estilo from '../../Estilo';
import { ScrollView } from "react-native-gesture-handler";
import Entrada from "../componentes/Entrada";

const Formulario = ({navigation}) => {
    // estado
    const [nome, setNome] = useState('nome');
    const [sobrenome, setSobrenome] = useState('sobrenome');
    const [clicou, setClicou] = useState(false)
  
    useEffect(()=>{
      setNome()
    }, [clicou])
  
    return (
    <ScrollView>
      <View style={Estilo.container}>
        <Entrada tipo="nome" cor='red' />
        <Entrada tipo="email" cor='blue' />
        <Entrada tipo="idade" cor='red' />

        <TouchableOpacity 
          onPress={()=>{setClicou(true)}}
          style={Estilo.botao}
          >
          <Text>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{navigation.navigate('Login')}}
        style={Estilo.botao}
        >
          <Text>Tela de Login</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }

  export default Formulario;