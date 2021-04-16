import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  a {
    display: flex;
    align-items: center;

    margin: 0 22px;
    height: 88px;
    background: var(--orange);
    color: var(--background-secondary);
    border-radius: 30px;

    text-decoration: none;
    font-size: 22px;
    font-weight: 600;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 16px;
      width: 88px;
      height: 88px;
      background: var(--orange-hard);
      border-radius: 30px;
    }

    & + a {
      margin-top: 24px;
    }
  }
`;
