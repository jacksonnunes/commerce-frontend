/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

interface CategoryItemProps {
  isSelected?: boolean;
}

export const Container = styled.a<CategoryItemProps>`
  cursor: pointer;
  width: 120px;
  min-width: 120px;
  padding: 8px;

  border: 2px solid #dfdfdf;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transition: all 0.2s ease;

  ${props => props.isSelected && css`
    background: #febd2e;
  `}

  &:hover {
    background: #febd2e;
    box-shadow: 2px 2px 4px #febd2e, -2px -2px 4px #febd2e, 2px -2px 4px #febd2e,
      -2px 2px 4px #febd2e;
    border: 2px solid #febd2e;
  }

  img {
    width: 48px;
  }

  p {
    font-size: 18px;
  }
`;
