import { useState, useEffect } from 'react';

import pokemonApi from '../services/api';

export interface PokemonFetch {
  id: number;
  name: string;
  abilities: [];
  types: [];
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
}

export interface PokemonSpeciesFetch {
  id: number;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    },
  ];
  generation: {
    name: string;
  };
}

interface PokemonHooks {
  error: boolean;
  pokemon: PokemonFetch | null;
  pokemonSpecies: PokemonSpeciesFetch | null;
}

const usePokemon = (id: number): PokemonHooks => {
  const [pokemon, setPokemon] = useState<PokemonFetch | null>(null);
  const [
    pokemonSpecies,
    setPokemonSpecies,
  ] = useState<PokemonSpeciesFetch | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async function pokemonFetch() {
      setError(false);

      try {
        const [responsePokemon, responsePokemonSpecies] = await Promise.all([
          pokemonApi.get<PokemonFetch>(`pokemon/${id}`),
          pokemonApi.get<PokemonSpeciesFetch>(`pokemon-species/${id}`),
        ]);

        const pokemonData = responsePokemon.data;
        const pokemonSpeciesData = responsePokemonSpecies.data;

        setPokemon(pokemonData);
        setPokemonSpecies(pokemonSpeciesData);
      } catch (e) {
        setError(true);
      }
    })();
  }, [id]);

  return { pokemon, pokemonSpecies, error };
};

export default usePokemon;
