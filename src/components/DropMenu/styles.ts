import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  padding: 30px;
  background: #f5f3f0;
  border-radius: 5px;
  width: 360px;
  height: 390px;

  box-shadow: 2px 2px 8px #aaa;
  transition: visibility 0.3s, opacity 0.3s ease;

  ${props =>
    props.isOpen
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
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
