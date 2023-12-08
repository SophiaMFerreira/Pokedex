import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavPrincipal from './componentes/navegacaoPrincipal';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <NavPrincipal/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
