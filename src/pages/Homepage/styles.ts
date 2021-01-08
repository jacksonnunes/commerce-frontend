import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 500px;
  margin: auto;

  background: #febd2e;
  border-radius: 0px 0px 20px 20px;

  display: flex;
  position: relative;

  .logo-img {
    width: 300px;
    height: 300px;

    margin-left: 50px;
    margin-top: 20px;
  }

  .homepage-img {
    position: absolute;
    bottom: -84px;
    right: 300px;
  }

  div {
    position: absolute;
    right: 50px;
    margin-top: 42px;

    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #242424;

      padding: 12px 20px;

      border-radius: 50px;

      & + a {
        margin-left: 14px;
        background: #f5f3f0;
        transition: all 0.2s ease;

        &:hover {
          background: #242424;
          color: #ececec;
        }
      }
    }

    a:first-child {
      color: #787878;
      transition: all 0.2s ease;

      &:hover {
        background: #f5f3f0;
        color: #242424;
      }
    }
  }
`;

export const Content = styled.div`
  max-width: 1450px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: 'Amaranth', sans-serif;
  font-size: 36px;
  margin: 50px 28px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Aside = styled.aside`
  margin: 0 20px 0 28px;
`;
