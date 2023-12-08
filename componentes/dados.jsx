import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getPokemons() {
    try {
        const dados = await AsyncStorage.getItem("pokemons")
        return dados ? JSON.parse(dados) : []
    } catch (e) {
        console.log(e)
    }
}

export async function salvarPokemons(pokemons) {
    try {
        const jsonLista = JSON.stringify(pokemons);
        await AsyncStorage.setItem("pokemons", jsonLista);
    } catch (e) {
        console.log(e)
    }
}

export async function buscarPokemons() {
    //Montando as URLs
    const urls = []
    for (let i = 1; i <= 9; i++) {
        urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    //Esperando todas as consultas serem feitas
    return await Promise.all(
        //Montando o vetor com as consultas a serem feitas
        urls.map(url => fetch(url).then(resposta => resposta.json()))
    )
}

export async function buscarPokemon(idPokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    const resposta = await fetch(url);
    const pokemon = await resposta.json();
    return pokemon;
}