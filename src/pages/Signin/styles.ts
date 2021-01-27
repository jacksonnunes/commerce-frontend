import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/images/sign-in_wallpaper.jpg';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;

  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(36, 36, 36, 0.85);

  width: 98%;
  max-width: 500px;
  height: 730px;

  border-radius: 30px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 95%;

    margin-top: -50px;

    h2 {
      color: #ececec;
      font-size: 36px;
      margin-bottom: 26px;
      font-weight: 500;
    }

    a {
      margin: 8px 0;
      color: #ececec;
      text-decoration: none;
      text-align: right;
      transition: all 0.2s ease;

      &:hover {
        color: ${shade(0.2, '#ececec')};
      }
    }
  }
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  animation: ${appearFromTop} 1s;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;

    margin: 30px 0;

    transition: all 0.2s ease;
    color: #febd2e;
    text-decoration: none;

    &:hover {
      color: ${shade(0.2, '#febd2e')};
    }

    > svg {
      margin-right: 12px;
    }
  }
`;
