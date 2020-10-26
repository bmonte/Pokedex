import React, { useState, useCallback } from 'react';

import { FaUndoAlt } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

import {
  PokemonImage,
  PokemonGeneration,
  SpriteControls,
  SpriteButton,
} from './styles';

interface PokemonSpriteProps {
  generation: string;
  sprites: {
    [key: string]: string;

    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
}

const PokemonSprite: React.FC<PokemonSpriteProps> = ({
  sprites,
  generation,
}: PokemonSpriteProps) => {
  const [isFront, setIsFront] = useState(true);
  const [isShiny, setIsShiny] = useState(false);

  const setImage = useCallback(() => {
    const front = isFront ? 'front' : 'back';
    const shiny = isShiny ? 'shiny' : 'default';

    return `${front}_${shiny}`;
  }, [isFront, isShiny]);

  const toggleShiny = () => {
    setIsShiny(prevValue => !prevValue);
  };

  const toggleFront = () => {
    setIsFront(prevValue => !prevValue);
  };

  return (
    <>
      <PokemonImage src={sprites[setImage()]} alt="Pokemon" />
      <SpriteControls>
        <SpriteButton type="button" onClick={toggleShiny} isActive={isShiny}>
          <HiSparkles size={14} />
        </SpriteButton>

        <PokemonGeneration>{generation}</PokemonGeneration>

        <SpriteButton type="button" onClick={toggleFront} isActive={!isFront}>
          <FaUndoAlt size={14} />
        </SpriteButton>
      </SpriteControls>
    </>
  );
};

export default PokemonSprite;
