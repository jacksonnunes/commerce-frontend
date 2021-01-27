import styled, { css } from 'styled-components';

interface ContainerProps {
  isAdm?: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  width: 400px;
  min-height: 220px;
  margin: 9px;

  display: flex;
  flex-direction: column;

  background: #fcfdff;
  box-shadow: 2px 2px 2px rgba(204, 204, 204, 0.5);
  border-radius: 20px;

  padding: 14px;
  transition: all 0.2s ease;

  ${props =>
    props.isAdm &&
    css`
      cursor: default;
    `}

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

    h3 {
      margin-right: 20px;
    }

    p {
      color: #8b8b8b;
      font-size: 14px;
      margin-top: 12px;
      margin-right: 20px;
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

  .icons {
    margin: 12px 0 0 0;
    text-align: end;

    svg {
      cursor: pointer;
    }

    svg:first-child {
      margin-right: 48px;
    }
  }
`;
