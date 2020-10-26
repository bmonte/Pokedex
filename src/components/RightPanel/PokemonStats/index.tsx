import React from 'react';

import { StatsLine, StatsList } from './styles';

interface PokemonStatsProps {
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
}

const PokemonStats: React.FC<PokemonStatsProps> = (
  props: PokemonStatsProps,
) => {
  const { stats } = props;

  function setStatus(base_stat: number, stat: string) {
    const padLength = 20 - `${base_stat}`.length;

    return `${stat}`.padEnd(padLength, '.') + base_stat;
  }

  return (
    <StatsList>
      {stats.map(({ base_stat, stat }) => (
        <StatsLine key={stat.name}>{setStatus(base_stat, stat.name)}</StatsLine>
      ))}
    </StatsList>
  );
};

export default PokemonStats;
