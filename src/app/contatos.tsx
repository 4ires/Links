import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import { styles } from '../css/contatosStyles';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.imagens}
        source={require('../../assets/contato.jpg')}
      />
      <Text style={styles.text}>Você está na página contatos, seja bem vindo!</Text>
      <Link style={styles.btn} href={"/"}>Voltar para o início</Link>
      <StatusBar style="auto" />
    </View>
  );
}