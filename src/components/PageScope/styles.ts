import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;

  display: flex;
  width: 100%;

  > aside {
    img {
      width: 234px;
      margin: 48px 22px 72px;
    }
  }

  @media only screen and (max-width: 1499px) {
    flex-direction: column;

    > aside {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 849px) {
    > aside {
      margin: 16px 0 24px 16px;

      img {
        width: 180px;
        margin: 0;
      }
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 24px;

  background: var(--background-secondary);
  border-radius: 20px;
  margin: 32px 32px 32px 0;

  @media only screen and (max-width: 1499px) {
    margin: 0 16px;
    flex: 1;
    border-radius: 10px;
  }
`;

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    background: var(--gray-hard);
    border-radius: 30px;
    color: var(--white);
    transition: all 0.2s ease-in-out;

    &:hover {
      background: var(--white);
      color: var(--background-secondary);
    }
  }

  @media only screen and (max-width: 1499px) {
    div {
      border-radius: 10px;
    }
  }
`;
