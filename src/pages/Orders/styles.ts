import styled from 'styled-components';

interface StatusProps {
  status?: 'pending' | 'preparing' | 'done';
}

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

  flex-wrap: wrap;

  @media only screen and (max-width: 904px) {
    justify-content: center;
  }
`;

export const Ticket = styled.div`
  position: relative;
  padding: 16px;
  margin: 8px;
  margin-bottom: 24px;
  width: 31.8%;
  max-width: 450px;

  background: #f5f5bc;
  border-radius: 8px;

  color: var(--background-secondary);
  font-size: 18px;

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

  @media only screen and (max-width: 1149px) {
    width: 48%;
  }

  @media only screen and (max-width: 904px) {
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
