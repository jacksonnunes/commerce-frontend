import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;

  h2 {
    font-family: Amaranth, sans-serif;
    padding: 32px 24px;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  margin: 12px 16px;

  background: #fcfdff;
  box-shadow: 4px 4px 14px rgba(204, 204, 204, 0.25);
  border-radius: 8px;

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

export const AddressContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 8px;
  margin: 12px 16px;
  border: 1px solid #bbb;
  border-radius: 8px;
  font-size: 16px;

  div {
    p {
      margin-bottom: 16px;
    }

    span {
      font-weight: 400;
    }
  }

  a {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    text-decoration: none;
    color: #2e78ff;
  }
`;

export const OrderInfo = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;

  margin-right: 32px;
  font-weight: 400;

  button {
    background: #2e78ff;
    border-color: #2e78ff;
    color: #ececec;

    font-size: 18px;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background: ${shade(0.2, '#2e78ff')};
      border-color: ${shade(0.2, '#2e78ff')};
    }
  }
`;
