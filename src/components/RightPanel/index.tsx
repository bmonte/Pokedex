import React from 'react';

import PokemonStats from './PokemonStats';
import PokemonTypes from './PokemonTypes';
import { usePokemonContext } from '../../context/Pokemon';

import { Panel, PanelRow, Screen } from './styles';

const RightPanel: React.FC = () => {
  const { pokemon } = usePokemonContext();

  return (
    <Panel>
      {pokemon && (
        <PanelRow>
          <Screen>
            <PokemonStats stats={pokemon.stats} />
          </Screen>
          <PokemonTypes types={pokemon.types} />
        </PanelRow>
      )}
    </Panel>
  );
};

export default RightPanel;
