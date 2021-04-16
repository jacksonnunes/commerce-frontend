import styled from 'styled-components';

export const Content = styled.div`
  display: flex;

  main {
    margin-right: 24px;
  }

  aside {
    flex: 1;
  }
`;

export const CategoriesContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-self: stretch;

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
`;

export const ProductsContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin-top: -9px;
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
      border: none;
      border-radius: 0 15px 15px 0;

      svg {
        color: var(--white);
      }
    }
  }
`;

export const Announcement = styled.div`
  background: var(--blue);
  flex: 1;
  height: 184px;
  margin-bottom: 56px;
  border-radius: 20px;
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);

  h2 {
    font-size: 32px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--gray-hard);
    width: 54px;
    height: 54px;
    border-radius: 15px;

    svg {
      color: var(--white);
    }
  }
`;

export const Orders = styled.div``;
