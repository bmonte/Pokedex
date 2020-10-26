import styled, { css } from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const PokemonImage = styled.img`
  width: 100%;
  background: linear-gradient(
    15deg,
    #cad5b5 64%,
    #dde2d4 70%,
    #dde2d4 81%,
    #fff 86%,
    #dde2d4 89%,
    #dde2d4 100%
  );
  border: inset #9aa28b 3px;
  border-radius: 5px;
  margin: 10px 0;
  image-rendering: pixelated;
`;

export const SpriteControls = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const SpriteButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  background: none;
  border: groove #b06868 3px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border-color: #b8ed7c;
  }

  ${props =>
    props.isActive &&
    css`
      border-color: #b8ed7c;
    `}
`;

export const PokemonGeneration = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 120px;
  border: solid #b8ed7c 3px;
  border-radius: 20px;
  background: rgb(255, 213, 120);
  background: radial-gradient(
    circle,
    rgba(255, 213, 120, 1) 0%,
    rgba(255, 252, 163, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );

  font-size: 20px;
  text-transform: uppercase;
`;
