import React from 'react';

import { DividerContainer, Gap, Hinge } from './styles';

const Divider: React.FC = () => {
  return (
    <DividerContainer>
      <Gap />
      <Hinge />
      <Gap />
      <Hinge />
      <Gap />
    </DividerContainer>
  );
};

export default Divider;
