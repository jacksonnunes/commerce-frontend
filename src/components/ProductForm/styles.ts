import styled, { css } from 'styled-components';

interface ContainerProps {
  isShown: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.4);

  ${props =>
    props.isShown &&
    css`
      display: flex;
    `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgba(24, 24, 24, 0.4);
  width: 450px;
  padding: 20px;
  border-radius: 20px;

  h1 {
    margin-bottom: 30px;
    color: #ececec;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;

    button {
      flex: 1;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
