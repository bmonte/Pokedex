import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { usePokemonContext } from '../../context/Pokemon';
import LeftPanel from '../../components/LeftPanel';
import Divider from '../../components/Divider';
import RightPanel from '../../components/RightPanel';

import { PokedexContainer } from './styles';

const Pokedex: React.FC = () => {
  const { setPokemonId } = usePokemonContext();

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
        <LeftPanel />
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
