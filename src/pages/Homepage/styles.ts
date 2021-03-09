import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

export const CategoriesContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-self: stretch;
  margin: 8px;

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
  }

  a + a {
    margin-left: 8px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin-top: -9px;
`;
