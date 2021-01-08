import styled from 'styled-components';

export const Container = styled.a`
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
`;
