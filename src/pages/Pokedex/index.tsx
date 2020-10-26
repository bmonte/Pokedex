import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import LeftPanel from '../../components/LeftPanel';
import Divider from '../../components/Divider';
import RightPanel from '../../components/RightPanel';

import { PokedexContainer } from './styles';

import usePokemon from '../../hooks/usePokemon';

const Pokedex: React.FC = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const { pokemon, pokemonSpecies } = usePokemon(pokemonId);

  const diminuirId = (prevId: number): number => {
    if (prevId === 1) return 1;

    return prevId - 1;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setPokemonId(prevId => diminuirId(prevId))}
      >
        <FaArrowLeft size={64} />
      </button>
      <PokedexContainer>
        <LeftPanel pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
        <Divider />
        <RightPanel />
      </PokedexContainer>
      <button type="button" onClick={() => setPokemonId(prevId => prevId + 1)}>
        <FaArrowRight size={64} />
      </button>
    </>
  );
};

export default Pokedex;
