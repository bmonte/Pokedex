import React from 'react';

import PokemonStats from './PokemonStats';
import PokemonTypes from './PokemonTypes';
import PokedexActions from './PokedexActions';
import { usePokemonContext } from '../../context/Pokemon';

import { Panel, PanelRow, Screen } from './styles';

const RightPanel: React.FC = () => {
  const { pokemon } = usePokemonContext();

  return (
    <Panel>
      {pokemon && (
        <>
          <PanelRow>
            <Screen>
              <PokemonStats stats={pokemon.stats} />
            </Screen>
            <PokemonTypes types={pokemon.types} />
          </PanelRow>
        </>
      )}
      <div style={{ flexGrow: 1 }} />
      <PokedexActions />
    </Panel>
  );
};

export default RightPanel;
