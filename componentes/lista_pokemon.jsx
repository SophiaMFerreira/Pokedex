import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';

const ListaPokemon = ({ navigation, pokemons }) => {
  const [pesquisa, setPesquisa] = useState('');
  const [filtroPokemon, setFiltroPokemon] = useState([]);
  const [masterPokemon, setMasterPokemon] = useState([]);

  useEffect(() => {
        setFiltroPokemon(pokemons);
        setMasterPokemon(pokemons);
  }, []);

  const pesquisaFiltro = (text) => {
    if (text) {
      const newData = masterPokemon.filter(
        function (item) {
          if (item.name) {
            const itemData = item.name.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
        });
      setFiltroPokemon(newData);
    } else {
      setFiltroPokemon(masterPokemon);
    }
    setPesquisa(text);
  };

  return (
    <>
      <View>
        <TextInput
          style={styles.pesquisa}
          onChangeText={(text) => pesquisaFiltro(text)}
          value={pesquisa}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={filtroPokemon}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Pokemon', { idPokemon: item.id })} >
              <Text style={styles.text}>No {item.id} - {item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c6bd7a',
    marginBottom: 150,
    width: 330,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 470,
  },
  text: {
    fontSize: 35,
  },
  pesquisa: {
    height: 40,
    width: 270,
    paddingLeft: 20,
    marginBottom: 20,
    backgroundColor: '#cbd5d4',
    borderRadius: 6,
  },
});

export default ListaPokemon;