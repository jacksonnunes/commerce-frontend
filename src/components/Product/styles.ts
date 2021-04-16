/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 250px;
  margin: 9px;
  margin-top: 96px;

  border: 2px solid var(--gray-hard);
  border-radius: 30px;

  padding: 24px;
  transition: all 0.2s ease;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: start;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid var(--orange);
  }

  img {
    width: 174px;
    margin-top: -50%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  strong {
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 20px;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 32px;
  }

  h3 {
    font-size: 24px;
  }
`;

export const PlusButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;
  bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--orange);
  color: var(--background-secondary);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: var(--orange-hard);
  }
`;
