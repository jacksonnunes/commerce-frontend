import styled, { css } from 'styled-components';

interface StatusProps {
  status?: 'pending' | 'preparing' | 'done';
}

export const Container = styled.div`
  position: relative;
  max-width: 1150px;
  margin: 0 auto;

  font-weight: 400;

  h2 {
    font-family: Amaranth, sans-serif;
    padding: 32px 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  flex-wrap: wrap;
`;

export const Ticket = styled.div`
  position: relative;
  padding: 16px;
  margin: 4px;
  margin-bottom: 16px;
  width: 450px;

  background: #f5f5bc;
  box-shadow: 8px 12px 14px rgba(204, 204, 204, 0.5);
  border-radius: 8px;

  &:after {
    background: linear-gradient(-45deg, transparent 16px, #f5f5bc 0),
      linear-gradient(45deg, transparent 16px, #f5f5bc 0);
    background-repeat: repeat-x;
    background-position: left bottom;
    background-size: 22px 32px;
    content: '';
    display: block;

    width: 100%;
    height: 32px;

    position: absolute;
    bottom: -14px;
    left: 0px;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const TicketHeader = styled.div<StatusProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    align-items: center;

    color: #2e78ff;

    svg {
      margin-left: 16px;
    }
  }
`;

export const TicketUpdate = styled.div`
  display: flex;
  justify-content: center;

  margin: 12px 0;
`;

export const Products = styled.div`
  padding: 12px;
  border-top: 1px dashed #242424;
  border-bottom: 1px dashed #242424;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:first-child {
      margin-right: 24px;
    }
  }
`;

export const Bill = styled.div`
  padding: 12px;
  border-bottom: 1px dashed #242424;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Address = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;

  padding: 12px;

  strong {
    margin-bottom: 8px;
  }
`;
