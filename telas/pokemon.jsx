import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import NavPokemon from '../componentes/navegacaoPokemon';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { buscarPokemon } from '../componentes/dados';

export default function Pokemon({route}) {
    const idPokemon = route?.params?.idPokemon

    const [pokemon, setPokemon] = useState(null)

    useEffect( () => {
        if (idPokemon) {
            buscarPokemon(idPokemon).then(pk => setPokemon(pk))
        }
        
    }, []
    )

    /*
    useEffect( () =>{
        console.log(pokemon.name)
    },[pokemon])
    */

    return (
        <>
            <View style={styles.container}>
                <View style={styles.contImagem}>
                    <Text style={styles.texto}>No {pokemon?.id}</Text>
                    <Image
                        style={styles.imagem}
                        source={{ uri: `${pokemon?.sprites.front_default}` }}
                    />
                    <Text style={styles.texto}>{pokemon?.name}</Text>
                </View>
                <NavigationContainer independent={true} >
                    <NavPokemon idPokemon={pokemon?.id}/>
                </NavigationContainer>
                <StatusBar style="auto" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434c43',
        padding: 20
    },
    contImagem: {
        backgroundColor: '#729c7b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginBottom: 10
    },
    imagem: {
        backgroundColor: '#cbd5d4',
        height: 250,
        width: 250,
        borderRadius: 6,
    },
    texto: {
        fontSize: 20,
        marginBottom: 3,
        marginTop: 3
    }
});