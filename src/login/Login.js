import { View,Text, TextInput, TouchableOpacity} from "react-native";
import Estilo from '../../Estilo';
import Entrada from "../componentes/Entrada";

const Login = ({navigation})=>{
    return(
        <View style={Estilo.containerLogin}>
            <Text style={Estilo.title}>Tela de Login</Text>

            <Entrada tipo="Nome de Usuario" />
            <Entrada tipo="Senha" />
            <TouchableOpacity style={Estilo.botao}
            onPress={()=>{navigation.navigate('Home')}}>
                <Text>
                    Logar
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Login;