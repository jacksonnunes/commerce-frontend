import styled, { css } from 'styled-components';

interface OrderProps {
  status: 'pending' | 'preparing' | 'out' | 'done';
}

const orderStatusVariations = {
  pending: css`
    border: 1px solid var(--gray-hard);
  `,
  preparing: css`
    background: var(--blue);
  `,
  out: css`
    background: var(--blue);
  `,
  done: css`
    background: var(--green);
  `,
};

export const Content = styled.div`
  display: flex;

  main {
    margin-right: 24px;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  @media only screen and (max-width: 1249px) {
    flex-direction: column-reverse;
    align-items: center;

    main {
      width: 100%;
      margin-right: 0;
    }

    aside {
      width: 100%;
      margin-bottom: 24px;
    }
  }
`;

export const CategoriesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-self: stretch;

  margin-bottom: 64px;

  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 8px;
    display: none;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &:hover::-webkit-scrollbar {
    display: block;
  }

  a + a {
    margin-left: 8px;
  }

  @media only screen and (max-width: 1499px) {
    margin-bottom: 32px;
  }
`;

export const ProductsContainer = styled.section`
  display: flex;
  justify-content: center;

  margin: -9px auto 0;

  > div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    width: max-content;
  }
`;

export const MiddleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 40px;
  }

  div {
    display: flex;
    flex: 1;
    max-width: 480px;
    margin-left: 16px;

    input {
      flex: 1;
      padding: 16px;
      background: transparent;
      border-radius: 15px 0 0 15px;
      border: 1px solid var(--gray-hard);
      font-size: 18px;
      color: var(--white);

      ::placeholder {
        color: var(--text-secondary);
        font-size: 18px;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 54px;
      background: var(--gray-hard);
      color: var(--white);
      border: none;
      border-radius: 0 15px 15px 0;
      transition: all 0.2s ease;

      &:hover {
        background: var(--white);
        color: var(--background-secondary);
      }
    }
  }

  @media only screen and (max-width: 999px) {
    h1 {
      display: none;
    }

    div {
      margin: 0;
      max-width: 100%;
    }
  }
`;

export const Announcement = styled.div`
  background: var(--blue);
  width: 100%;
  max-width: 450px;
  height: 220px;
  margin-bottom: 56px;
  border-radius: 20px;
`;

export const OrdersContainer = styled.div`
  width: 100%;
  max-width: 450px;
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  color: var(--white);

  h2 {
    font-size: 32px;
  }

  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--gray-hard);
    color: var(--white);
    width: 54px;
    height: 54px;
    border-radius: 15px;
    transition: all 0.2s ease;

    &:hover {
      background: var(--white);
      color: var(--background-secondary);
    }
  }
`;

export const Orders = styled.div``;

export const Order = styled.div<OrderProps>`
  padding: 12px;
  border-radius: 10px;

  ${props => orderStatusVariations[props.status]}

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span + span {
      margin-top: 8px;
    }
  }

  & + div {
    margin-top: 16px;
  }
`;
