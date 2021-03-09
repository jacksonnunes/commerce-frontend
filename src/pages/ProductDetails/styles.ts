import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background: #fcfdff;
  max-width: 450px;
  margin: 8px;
  border-radius: 12px;

  img {
    width: 100%;
    max-height: 300px;
    border-radius: 12px 12px 0 0;

    margin-bottom: 24px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    padding: 16px;

    > p {
      margin: 32px 0 32px 0;
      color: #8b8b8b;
    }
  }

  button {
    background: #2e78ff;
    color: #ececec;
    border-color: #2e78ff;
    width: 100%;
    height: 56px;

    svg {
      margin-right: 16px;
    }

    &:hover {
      background: ${shade(0.2, '#2e78ff')};
      border: 2px solid ${shade(0.2, '#2e78ff')};
    }
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 32px;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80px;

    svg {
      cursor: pointer;
    }
  }
`;
