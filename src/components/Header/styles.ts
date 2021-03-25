import styled, { css } from 'styled-components';

interface ContainerProps {
  isAdm?: boolean;
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  height: 100px;
  margin: auto;

  background: #febd2e;
  border-radius: 0px 0px 20px 20px;

  display: flex;
  position: relative;
  align-items: center;

  ${props =>
    props.isAdm &&
    css`
      background: #2e78ff;
      color: #ececec;
    `}

  .logo-img {
    width: 200px;
  }

  > div {
    position: absolute;
    right: 50px;

    display: flex;
    place-content: center;
  }
`;

export const DropMenuContainer = styled.div`
  position: relative;

  div:last-child {
    position: absolute;
    top: 26;
    right: 0;
  }
`;

export const MenuButton = styled.div`
  cursor: pointer;

  svg:first-child {
    margin-right: 4px;
  }
`;
