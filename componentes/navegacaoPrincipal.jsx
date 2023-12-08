import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Home from '../telas/home';
import Pokemon from '../telas/pokemon';

const Stack = createStackNavigator();

export default function  NavPrincipal() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}