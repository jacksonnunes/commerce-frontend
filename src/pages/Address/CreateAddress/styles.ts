import styled, { keyframes } from 'styled-components';

import backgroundImg from '../../../assets/images/address.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 auto;
  max-width: 1150px;
  height: 80vh;
  padding: 16px;

  background: url(${backgroundImg}) no-repeat;
  background-position: 80% 90%;

  button {
    width: 100%;
    margin: 8px;
    margin-top: 16px;
    height: 52px;
  }
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 650px;
  min-width: 400px;

  animation: ${appearFromBottom} 1s;
`;
