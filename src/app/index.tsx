import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyles';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.imagens}
        source={require('../../assets/inicio.jpg')}
      />
      <Text style={styles.text}>Olá! Você está no início, seja bem vindo!</Text>
      <Link style={styles.btn} href={"/contatos"}>Ir para contatos</Link>
      <Link style={styles.btn} href={"/sobre"}>Ir para sobre</Link>
      <StatusBar style="auto" />
    </View>
  );
}


