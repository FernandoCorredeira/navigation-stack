import { StyleSheet } from "react-native";

const Estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botao: {
      borderRadius:16, 
      borderWidth:1, 
      borderColor:'blue', 
      padding: 16, 
      margin: 20, 
      backgroundColor:'yellow'
    },
    caixa: {
      borderRadius:16, 
      borderWidth:1, 
      borderColor:'blue', 
      padding: 16,
      margin: 20,
      minWidth: 200, 
      maxWidth: 300
    },
    title:{
      fontSize: 25,
      color: "blue",
      paddingBottom: 50,
      fontWeight:"600"

      
    },
    containerLogin: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom:100,

    }

  });

  export default Estilo;