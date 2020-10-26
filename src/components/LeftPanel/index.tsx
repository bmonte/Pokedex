import React from 'react';

import PokemonSprite from './PokemonSprite';
import PokemonDescription from './PokemonDescription';

import { Panel, Screen, PokemonName } from './styles';

interface LeftPanelProps {
  pokemon: {
    abilities: [];
    id: number;
    name: string;
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
  } | null;

  pokemonSpecies: {
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
  } | null;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  pokemon,
  pokemonSpecies,
}: LeftPanelProps) => {
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
