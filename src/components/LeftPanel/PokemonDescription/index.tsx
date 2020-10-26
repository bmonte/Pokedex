import React from 'react';

import { Description } from './styles';

interface PokemonDescriptionProps {
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    },
  ];
}

const PokemonDescription: React.FC<PokemonDescriptionProps> = ({
  flavor_text_entries,
}: PokemonDescriptionProps) => {
  function pickRandomElement(descriptions: string[]) {
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  }

  function pickRandomDescription() {
    const descriptions = flavor_text_entries
      .filter(entries => entries.language.name === 'en')
      .map(entries => entries.flavor_text);

    const randomDescription = pickRandomElement(descriptions);

    return randomDescription;
  }

  return <Description>{pickRandomDescription()}</Description>;
};

export default PokemonDescription;
