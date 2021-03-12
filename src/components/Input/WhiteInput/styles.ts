import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  padding: 16px 12px 4px 12px;
  margin: 8px;
  background: #f5f3f0;

  border: none;
  border-bottom: 3px solid #febd2e;
  border-radius: 4px 4px 0 0;

  transition: all 0.3s ease;

  p {
    position: absolute;
    color: #888;
    transition: all 0.3s ease;
    z-index: 0;
  }

  ${props =>
    props.isFocused &&
    css`
      border-bottom: 3px solid #2e78ff;

      p {
        top: 0;
        left: 0;
        font-size: 12px;
        color: #2e78ff;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      p {
        top: 0;
        left: 0;
        font-size: 12px;
        color: #888;
      }
    `}

  input {
    position: relative;
    background: transparent;
    font-size: 16px;
    width: 100%;
    border: none;
    z-index: 1;
  }
`;
