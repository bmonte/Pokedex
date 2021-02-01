import React from 'react';

import LeftPanel from '../../components/LeftPanel';
import Divider from '../../components/Divider';
import RightPanel from '../../components/RightPanel';

import { PokedexContainer } from './styles';

const Pokedex: React.FC = () => {
  return (
    <>
      <PokedexContainer>
        <LeftPanel />
        <Divider />
        <RightPanel />
      </PokedexContainer>
    </>
  );
};

export default Pokedex;
