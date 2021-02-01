import React, { createContext, useContext, useState } from 'react';
import usePokemon, {
  PokemonFetch,
  PokemonSpeciesFetch,
} from '../hooks/usePokemon';

interface PokemonProviderData {
  pokemon: PokemonFetch | null;
  pokemonSpecies: PokemonSpeciesFetch | null;
  setPokemonId: React.Dispatch<React.SetStateAction<number>>;
}

interface PokemonProviderProps {
  children: JSX.Element;
}

const PokemonContext = createContext<PokemonProviderData>(
  {} as PokemonProviderData,
);

const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children,
}: PokemonProviderProps) => {
  const [pokemonId, setPokemonId] = useState<number>(1);
  const { pokemon, pokemonSpecies } = usePokemon(pokemonId);

  return (
    <PokemonContext.Provider value={{ pokemon, pokemonSpecies, setPokemonId }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = (): PokemonProviderData => {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }

  const { pokemon, pokemonSpecies, setPokemonId } = context;

  return { pokemon, pokemonSpecies, setPokemonId };
};

export default PokemonProvider;
