import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { buscarPokemon } from '../componentes/dados';

export default function PokeInfo1({ route }) {
    const [pokemon, setPokemon] = useState(null);
    
    const idPokemon = route.params?.idPokemon;
    //console.log(idPokemon)
    //alert(`PokeInfo1 - idPokemon: ${param?.idPokemon}`)
    
    useEffect( () => {
        
        if (idPokemon) {
            buscarPokemon(idPokemon).then(pk => setPokemon(pk))
        }
    }, []
    )
    
    return (
        <>
            <View style={styles.container}>
            <View style={styles.info}>
                    <Text>Tipo: {pokemon?.types.map(item => item.type.name).join("/ ")}</Text>
                </View>
                <View style={styles.info}>
                    <Text>Abilidade: {pokemon?.abilities.map(item => ' ' + item.ability.name).join("/")}</Text>
                </View>
                <View style={styles.info}>
                    <Text>Altura: {pokemon?.height  / 10}m</Text>
                </View>
                <View style={styles.info}>
                    <Text>Peso: {pokemon?.weight  / 10}kg</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434c43',
    },
    info: {
        backgroundColor: '#729c7b',
        borderRadius: 6,
        marginTop: 10,
        marginRight: 2,
        marginLeft: 2,
    }
});