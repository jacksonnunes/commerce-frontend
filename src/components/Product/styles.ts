/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 550px;
  margin: 9px;

  background: #fcfdff;
  box-shadow: 2px 2px 2px rgba(204, 204, 204, 0.5);
  border-radius: 12px;

  padding: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #242424;
    color: #ececec;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  padding: 4px;

  img {
    width: 130px;
    height: 130px;
    margin-right: 8px;
    border-radius: 8px;
  }

  h3 {
    margin-right: 16px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 4px;
`;
