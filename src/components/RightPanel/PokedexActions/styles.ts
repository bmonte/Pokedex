import styled from 'styled-components';

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  border-top: groove #757575 3px;
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: outset rgb(248, 187, 187) 6px;
  transform: rotate(60deg);
  background: radial-gradient(
    circle farthest-corner at 40% 25%,
    rgb(218, 237, 241) 9%,
    rgb(124, 214, 237) 20%,
    rgb(64, 90, 165) 62%,
    rgb(43, 125, 196) 100%
  );
  cursor: pointer;

  &:hover {
    background: radial-gradient(
      circle farthest-corner at 40% 25%,
      rgb(233, 241, 218) 9%,
      rgb(184, 237, 124) 20%,
      rgb(64, 165, 106) 62%,
      rgb(43, 196, 145) 100%
    );
  }

  &:active {
    background: radial-gradient(
      circle farthest-corner at 40% 25%,
      rgb(229, 255, 181) 9%,
      rgb(204, 237, 124) 20%,
      rgb(103, 165, 64) 62%,
      rgb(66, 204, 40) 100%
    );
  }

  &:after {
    content: '';

    width: 60px;
    height: 60px;
    border: double #460f0f 5px;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: -10px;
  }
`;

export const NumberInput = styled.input`
  /* Screen */
  background: linear-gradient(
    14deg,
    rgb(165, 205, 83) 60%,
    rgb(193, 217, 144) 65%
  );
  border: inset #879a65 3px;
  border-radius: 3px;

  /* Input */
  font-family: 'VT323';
  font-size: 28px;
  width: 80px;
  height: 40px;
  text-align: center;
  align-self: center;
`;
