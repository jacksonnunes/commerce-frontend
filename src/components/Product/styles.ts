import styled from 'styled-components';

export const Container = styled.a`
  width: 400px;
  height: 220px;

  display: flex;
  flex-direction: column;

  background: #fcfdff;
  box-shadow: 4px 4px 14px rgba(204, 204, 204, 0.25);
  border-radius: 20px;

  padding: 14px 14px;
  transition: all 0.2s ease;

  & + a {
    margin-left: 18px;
  }

  .product-header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;

    img {
      width: 130px;
      height: 130px;
      margin-right: 16px;
    }

    p {
      color: #8b8b8b;
      font-size: 14px;
      margin-top: 12px;
    }
  }

  .product-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    p {
      font-size: 14px;
    }
  }

  &:hover {
    background: #242424;

    .product-header {
      h3 {
        color: #ececec;
      }

      p {
        color: #bbbbbb;
        font-size: 14px;
        margin-top: 12px;
      }
    }

    .product-footer {
      p,
      h3 {
        color: #ececec;
      }
    }
  }
`;
