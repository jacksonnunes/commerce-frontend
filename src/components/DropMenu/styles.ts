import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  padding: 30px;
  background: #f5f3f0;
  border-radius: 5px;
  width: 370px;
  height: 390px;

  box-shadow: 2px 2px 8px #aaa;

  ${props =>
    props.isOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  a {
    display: flex;
    align-items: center;
    color: #242424;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;

    svg {
      margin-right: 16px;
    }

    & + a {
      margin-top: 10px;
    }
  }

  a:last-child {
    position: absolute;
    bottom: 30px;
  }
`;
