import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;

  left: 50%;
  transform: translateX(-50%);

  > div {
    display: flex;
    justify-content: center;
    padding: 5px 10px;

    div {
      display: flex;
      align-items: center;

      img {
        width: 35px;
      }
    }

    div:first-child {
      margin-right: 90px;
    }
  }

  @media only screen and (max-width: 1000px) {
    width: 95%;

    .contact:first-child {
      margin-right: 70px;
    }
  }
`;
