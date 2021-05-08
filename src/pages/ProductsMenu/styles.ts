import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1249px) {
    flex-direction: column-reverse;
    align-items: center;

    main {
      display: flex;
      flex-direction: column;

      width: 100%;
      max-width: 810px;
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
