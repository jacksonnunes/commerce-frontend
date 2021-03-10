import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-family: Amaranth, sans-serif;
    padding: 32px 24px;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  margin: 16px;

  background: #fcfdff;
  box-shadow: 4px 4px 14px rgba(204, 204, 204, 0.25);
  border-radius: 16px;

  img {
    width: 100px;
    margin-right: 16px;
    border-radius: 8px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;

  h3 {
    line-height: 22px;
  }

  span {
    font-size: 14px;
  }
`;

export const ProductInfo2 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: space-between;
  align-items: flex-end;
  text-align: end;
  flex: 1;

  span {
    font-weight: 500;
    font-size: 18px;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
    }

    > svg {
      & + svg {
        margin-left: 32px;
      }
    }
  }
`;
