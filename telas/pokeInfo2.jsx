import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { buscarPokemon } from '../componentes/dados';


export default function PokeInfo2({ route }) {
    const [pokemon, setPokemon] = useState(null);

    const idPokemon = route.params?.idPokemon;
    //console.log(idPokemon)
    //alert(`PokeInfo1 - idPokemon: ${param?.idPokemon}`)

    useEffect(() => {
        if (idPokemon) {
            buscarPokemon(idPokemon).then(pk => setPokemon(pk))
        }
    }, []
    )

    

    const stats = pokemon?.stats?.map((stats) => stats.base_stat)

    //alert(`PokeInfo2: ${pokemon?.id}`)
    //if (stats){
    //    console.log('stats')
    //    console.log(stats)
    //}
    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text>HP: {stats? stats[0] : '-' }</Text>
                </View>
                <View style={styles.info}>
                    <Text>Ataque: {stats? stats[1] : '-' }</Text>
                </View>
                <View style={styles.info}>
                    <Text>Defesa: {stats? stats[2] : '-' }</Text>
                </View>
                <View style={styles.info}>
                    <Text>Esp. Ataque: {stats? stats[3] : '-' }</Text>
                </View>
                <View style={styles.info}>
                    <Text>Esp. Defesa: {stats? stats[4] : '-' }</Text>
                </View>
                <View style={styles.info}>
                    <Text>Velocidade: {stats? stats[5] : '-' }</Text>
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