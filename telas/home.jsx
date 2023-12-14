import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaPokemon from '../componentes/lista_pokemon';
import Titulo from '../componentes/titulo';
import React, { useState, useEffect } from 'react';
import { buscarPokemons, getPokemons, salvarPokemons } from '../componentes/dados';

export default function Home({ navigation, route }) {
  const [pokemons, setPokemons] = useState([]);


  useEffect(() => {
    const busca = async () =>{
      let dados = await getPokemons();

      //if (dados == []){
        dados = await buscarPokemons();
        await salvarPokemons(dados)
      //}

      setPokemons(dados)
      //console.log(pokemons)
    }
    busca()
  }, [])

  return (
    <View style={styles.container}>
      <Titulo />
      <ListaPokemon navigation={navigation} pokemons={pokemons} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434c43',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  test: {
    fontSize: 20,
  },
});