/* eslint-disable camelcase */
import React from 'react';

import { StatsLine, StatsList } from './styles';

interface IStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonStatsProps {
  stats: Array<IStats>;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({
  stats,
}: PokemonStatsProps) => {
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
