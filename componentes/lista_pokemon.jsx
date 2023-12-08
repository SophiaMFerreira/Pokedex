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

  return (
    <>
      <View>
        <TextInput
          style={styles.pesquisa}
          //onChangeText={(text) => searchFilter(text)}
          //value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={pokemons}
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
    height: 400,
  },
  text: {
    fontSize: 35,
  },
  pesquisa: {
    height: 40,
    width: 270,
    paddingLeft: 20,
    marginBottom: 15,
    backgroundColor:'#cbd5d4',
    borderRadius: 6,
  },
});

export default ListaPokemon;