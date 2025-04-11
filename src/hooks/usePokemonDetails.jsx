import { useQuery } from "@tanstack/react-query";
import axios from "axios"

const getPokemonDetails = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    return response.data;
}

const getAbilityEffect = async (abilityUrl) => {
    const response = await axios.get(abilityUrl);

    return response.data.effect_entries.find((entry) => entry.language.name === 'en')?.effect || 'No effect in english avaiable!';
}

export function usePokemonDetails(name) {
    return useQuery({
        queryKey: ["pokemonDetails", name],
        queryFn: async () => {
            const pokemonData = await getPokemonDetails(name);

            const abilityEffects = await Promise.all(
                pokemonData.abilities.map((ability) => 
                    getAbilityEffect(ability.ability.url).then((effect) => ({
                        name: ability.ability.name,
                        effect,
                    }))
                )
            );

            return {
                name: pokemonData.name,
                image: pokemonData.sprites.front_default,
                moves: pokemonData.moves.map((move) => move.move.name),
                abilities: abilityEffects,
                types: pokemonData.types.map((type) => type.type.name),
            };
        },
        staleTime: 1000 * 60 * 5,
    });
}