import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/sobreStyles';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
         <Image style={styles.imagens}
        source={require('../../assets/sobre.jpg')}
      />
      <Text style={styles.text}>Você está na página sobre, seja bem vindo!</Text>
      <Link style={styles.btn} href={"/"}>Voltar para início</Link>
      <StatusBar style="auto" />
    </View>
  );
}

