import React from 'react';

import { usePokemonContext } from '../../../context/Pokemon';
import { Actions, Button, NumberInput } from './styles';

const PokedexActions: React.FC = () => {
  const { setPokemonId } = usePokemonContext();

  const diminuirId = (prevId: number): number => {
    if (prevId === 1) return 1;

    return prevId - 1;
  };

  const handleInput = (inputValue: number) => {
    if (inputValue <= 0) {
      setPokemonId(1);

      return;
    }

    setPokemonId(inputValue);
  };

  return (
    <Actions>
      <Button onClick={() => setPokemonId(prevId => diminuirId(prevId))} />
      <NumberInput type="number" onChange={e => handleInput(+e.target.value)} />
      <Button onClick={() => setPokemonId(prevId => prevId + 1)} />
    </Actions>
  );
};

export default PokedexActions;
