import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  margin-top: 50px;

  h1 {
    font-family: 'Amaranth', sans-serif;
    font-size: 36px;
  }

  @media only screen and (max-width: 1450px) {
    max-width: 95%;
  }
`;

export const Content = styled.div`
  margin-top: 26px;
  padding: 20px;
  background: #fcfdff;
  border-radius: 10px;

  box-shadow: 4px 4px 14px rgba(204, 204, 204, 0.25);

  font-size: 22px;
  font-weight: 400;

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      cursor: pointer;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #2e78ff;
      font-size: 18px;

      svg {
        margin: 0;
      }

      p {
        margin-left: 12px;
      }

      &:hover {
        background: #ececec;
      }
    }
  }

  .content {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 14px;
    margin-bottom: 8px;

    svg {
      margin: 0;
    }

    p {
      margin-left: 12px;
    }
  }

  .content-footer {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-top: 14px;
    margin-bottom: 8px;
    color: #2e78ff;

    svg {
      margin: 0;
    }

    p {
      margin-left: 12px;
    }

    &:hover {
      background: #ececec;
    }
  }
`;
