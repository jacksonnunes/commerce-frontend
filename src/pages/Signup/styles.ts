import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundImage from '../../assets/images/sign-up_wallpaper.jpg';

export const Background = styled.div`
  background: url(${backgroundImage}) no-repeat right center;
  background-size: cover;

  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  padding: 30px;
  background: rgba(36, 36, 36, 0.85);
  height: 100vh;
  width: 100%;
  max-width: 700px;

  a {
    color: #febd2e;
    transition: all 0.5s ease;

    &:hover {
      color: ${shade(0.2, '#febd2e')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    text-align: center;
    width: 95%;
    max-width: 560px;

    margin-top: -50px;

    h2 {
      color: #ececec;
      font-size: 36px;
      margin-bottom: 26px;
      font-weight: 500;
    }
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  animation: ${appearFromLeft} 1s;

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
