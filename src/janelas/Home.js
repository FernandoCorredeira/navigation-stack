import { View,Text, TextInput, TouchableOpacity} from "react-native";
import Estilo from '../../Estilo';


const Home = ()=>{
    return(
        <View style={Estilo.container}>
            <Text style={Estilo.title}>Tela de Home!</Text>
        </View>
    )
}

export default Home;