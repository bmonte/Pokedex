import styled from 'styled-components';

export const Panel = styled.div`
  padding: 0;
  width: 379px;
  border: inset #b31818 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;

export const PanelRow = styled.div`
  display: flex;
  border-bottom: groove #757575 3px;
  justify-content: space-evenly;
`;

export const Screen = styled.div`
  background: linear-gradient(
    14deg,
    rgb(165, 205, 83) 60%,
    rgb(193, 217, 144) 65%
  );
  border: inset #879a65 3px;
  border-radius: 3px;

  /* Stats */
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px;
  flex: 1;
`;
