import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Teclado from "./componentes/Teclado";

export default function App() {
  return (
    <Teclado></Teclado>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewNumero: {
    flexDirection: 'row'
  }
});
