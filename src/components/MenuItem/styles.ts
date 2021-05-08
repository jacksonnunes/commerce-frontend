import styled, { css } from 'styled-components';

interface CategoryItemProps {
  isSelected?: boolean;
}

export const Container = styled.div<CategoryItemProps>`
  cursor: pointer;
  background: var(--gray-hard);
  width: 136px;
  margin: 0 24px 0 0;
  padding: 24px;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transition: all 0.2s ease;

  ${props =>
    props.isSelected &&
    css`
      background: var(--white);
      color: var(--background-secondary);
    `}

  &:hover {
    background: var(--white);
    color: var(--background-secondary);
  }

  img {
    width: 96px;
    margin-bottom: 32px;
  }

  p {
    font-size: 20px;
  }

  @media only screen and (max-width: 1499px) {
    border-radius: 20px;
    width: 120px;

    img {
      width: 88px;
    }
  }
`;
