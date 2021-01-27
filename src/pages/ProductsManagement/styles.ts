import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1450px;
  margin: 0 auto;

  button {
    width: 240px;
    height: 54px;
    margin: 0 0 23px 23px;

    font-size: 18px;
    font-weight: 400;

    svg {
      margin: 0 14px 0 0;
    }
  }
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

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: -9px;
`;
