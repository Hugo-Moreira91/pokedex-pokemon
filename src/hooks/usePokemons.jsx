import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const fetchPokemonList = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');

    return response.data.results;
}

const fetchRandomPokemons = (pokemonList, count = 10) => {
    const randomPokemons = pokemonList
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    
    const requests = randomPokemons.map((pokemon) => axios.get(pokemon.url).then((res) => res.data));
    return Promise.all(requests);
}

export function usePokemons() {
    const { data: pokemonList, error, isLoading } = useQuery({
        queryKey: ['pokemonList'],
        queryFn: fetchPokemonList,
        staleTime: 1000 * 60 * 10,
    });

    return { pokemonList, error, isLoading, fetchRandomPokemons };
}