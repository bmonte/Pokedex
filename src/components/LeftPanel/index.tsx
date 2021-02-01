import React from 'react';

import PokemonSprite from './PokemonSprite';
import PokemonDescription from './PokemonDescription';

import { usePokemonContext } from '../../context/Pokemon';

import { Panel, Screen, PokemonName } from './styles';

const LeftPanel: React.FC = () => {
  const { pokemon, pokemonSpecies } = usePokemonContext();

  return (
    <Panel>
      {pokemon && pokemonSpecies && (
        <>
          <Screen>
            <PokemonName>
              {pokemon.name}
              <span>no. {`${pokemon.id}`.padStart(3, '0')}</span>
            </PokemonName>
          </Screen>

          <PokemonSprite
            sprites={pokemon.sprites}
            generation={pokemonSpecies.generation.name}
          />

          <Screen>
            <PokemonDescription
              flavor_text_entries={pokemonSpecies.flavor_text_entries}
            />
          </Screen>
        </>
      )}
    </Panel>
  );
};

export default LeftPanel;
