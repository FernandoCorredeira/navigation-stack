import {View, Text, TextInput} from 'react-native';
import Estilo from '../../Estilo';

const Entrada = (props) => {
    const {tipo, cor} = props

    return (
    
        <View>
            <TextInput style={Estilo.caixa}
            placeholder={tipo}
            keyboardType='email-address'
            textContentType='telephoneNumber'

        />
        </View>
    )
}
export default Entrada;