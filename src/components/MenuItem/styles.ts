/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface ContainerProps {
  isAdm?: boolean;
}

export const Container = styled.a<ContainerProps>`
  width: 230px;
  height: 60px;

  border: 2px solid #dfdfdf;
  border-radius: 50px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #febd2e;
    box-shadow: 2px 2px 4px #febd2e, -2px -2px 4px #febd2e, 2px -2px 4px #febd2e,
      -2px 2px 4px #febd2e;
    border: 2px solid #febd2e;

    ${props =>
    props.isAdm &&
    css`
        color: #ececec;
        background: #2e78ff;
        box-shadow: 2px 2px 4px #2e78ff, -2px -2px 4px #2e78ff,
          2px -2px 4px #2e78ff, -2px 2px 4px #2e78ff;
        border: 2px solid #2e78ff;
      `}
  }

  & + a {
    margin-top: 16px;
  }

  img {
    margin-right: 16px;
    margin-left: 4px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffffff;
  }

  p {
    font-size: 18px;
  }

  @media only screen and (max-width: 1170px) {
    width: 63px;

    &:hover {
      width: 230px;
      overflow: hidden;

      p {
        display: block;
      }
    }

    p {
      display: none;
    }
  }
`;
