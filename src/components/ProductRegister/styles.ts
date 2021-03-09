import styled, { css } from 'styled-components';

interface ContainerProps {
  isShown: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  flex: 1;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  opacity: 0;

  background: rgba(0, 0, 0, 0.4);

  transition: opacity 0.3s ease;

  ${props =>
    props.isShown &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const Content = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  background: #ececec;
  max-width: 550px;
  height: 100%;
  padding: 20px;
  transform: translateX(-110%);
  transition: transform 0.3s ease, visibility 0.3s ease;

  ${props =>
    props.isShown &&
    css`
      transform: translateX(0%);
      transition: transform 0.3s ease;
    `}

  > svg {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 5px;
    transition: all 0.2s ease;

    &:hover {
      background: #c53030;
      color: #ececec;
    }
  }

  h1 {
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;

    button {
      svg {
        margin-right: 10px;
      }
    }
  }
`;
