import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PokeInfo1 from '../telas/pokeInfo1';
import PokeInfo2 from '../telas/pokeInfo2';

const Tab = createMaterialTopTabNavigator();

export default function NavPokemon({ idPokemon }) {
  //console.log('idPokemon')
  //console.log(idPokemon)

  const id = idPokemon

  return (
    <Tab.Navigator initialRouteName='Informações Gerais'>
      <Tab.Screen name="Informações Gerais" component={PokeInfo1} initialParams={{idPokemon}}/>
      <Tab.Screen name="Base Stats" component={PokeInfo2} initialParams={{idPokemon}} />
    </Tab.Navigator>
  );
}