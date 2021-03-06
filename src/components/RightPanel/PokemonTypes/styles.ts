import styled from 'styled-components';

export const TypesList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  border-left: groove #757575 2px;
`;

export const TypesHeader = styled.div`
  font-size: 28px;
  letter-spacing: 4px;
  text-transform: capitalize;

  display: inherit;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;

  background: linear-gradient(
    14deg,
    #460f0f 0,
    #891313 30%,
    #b31818 45%,
    #fd5555 65%,
    #b31818 95%
  );
  border: groove #e61515 3px;
  border-width: 3px 2px;
`;

export const TypesBox = styled.div`
  display: inherit;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;

  background: linear-gradient(14deg, #afafaf 50%, #ffffff 80%, #afafaf 90%);
  border-top: groove #757575 3px;
`;

export const Types = styled.div`
  font-size: 1.25rem;
  text-transform: capitalize;
  border: groove #757575 3px;
  border-radius: 10px;
  width: 75%;
  text-align: center;
  letter-spacing: 2px;
  align-self: center;
  background: linear-gradient(
    15deg,
    rgba(128, 128, 128, 0.5) 64%,
    rgba(138, 138, 138, 0.5) 70%,
    rgba(230, 230, 230, 0.5) 81%,
    rgba(255, 255, 255, 0.5) 86%,
    rgba(220, 220, 220, 0.5) 89%,
    rgba(230, 230, 230, 0.5) 100%
  );
  background-blend-mode: hard-light;

  &.normal {
    background-color: #bfbfbf;
  }
  &.fighting {
    background-color: #d87c58;
  }
  &.flying {
    background-color: #999ade;
  }
  &.poison {
    background-color: #925192;
  }
  &.ground {
    background-color: #dea761;
  }
  &.rock {
    background-color: #897864;
  }
  &.bug {
    background-color: #b1c967;
  }
  &.ghost {
    background-color: #c195dc;
  }
  &.steel {
    background-color: #49769c;
  }
  &.fire {
    background-color: #cf1414;
  }
  &.water {
    background-color: #1689de;
  }
  &.grass {
    background-color: #47a047;
  }
  &.electric {
    background-color: #e6b700;
  }
  &.psychic {
    background-color: #fa43b8;
  }
  &.ice {
    background-color: #98c3de;
  }
  &.dragon {
    background-color: #89315d;
  }
  &.dark {
    background-color: #282433;
  }
  &.fairy {
    background-color: #dca0ce;
  }
  &.unknown {
    background-color: #545454;
  }
  &.shadow {
    background-color: #364163;
  }
`;
