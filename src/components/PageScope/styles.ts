import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;

  display: flex;
  width: 100%;

  aside {
    img {
      width: 234px;
      margin: 48px 22px 72px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 24px;

  background: var(--background-secondary);
  border-radius: 20px;
  margin: 32px 32px 32px 0;
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

    svg {
      color: var(--white);
    }
  }
`;
