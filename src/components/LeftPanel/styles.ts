import styled from 'styled-components';

export const Panel = styled.div`
  width: 359px;
  padding: 10px;
  border: inset #b31818 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;

export const Screen = styled.div`
  background: linear-gradient(
    14deg,
    rgb(165, 205, 83) 60%,
    rgb(193, 217, 144) 65%
  );
  border: inset #879a65 3px;
  border-radius: 3px;
`;

export const PokemonName = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;

  font-size: 28px;
  letter-spacing: 4px;
  text-transform: capitalize;

  span {
    letter-spacing: normal;
    text-transform: lowercase;
  }
`;

// export const PanelRow = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   padding-top: 10px;
// `;
