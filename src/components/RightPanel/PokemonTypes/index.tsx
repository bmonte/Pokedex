import React from 'react';

import { TypesList, TypesHeader, TypesBox, Types } from './styles';

interface IType {
  slot: number;
  type: {
    name: string;
  };
}

interface PokemonTypesProps {
  types: Array<IType>;
}

const PokemonTypes: React.FC<PokemonTypesProps> = ({
  types,
}: PokemonTypesProps) => {
  return (
    <TypesList>
      <TypesHeader>Types</TypesHeader>
      <TypesBox>
        {types.map(t => (
          <Types className={t.type.name} key={t.slot}>
            {t.type.name}
          </Types>
        ))}
      </TypesBox>
    </TypesList>
  );
};

export default PokemonTypes;
