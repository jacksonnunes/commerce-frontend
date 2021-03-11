import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  margin-right: 40px;
  position: relative;

  a {
    text-decoration: none;
    color: #242424;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 27px;
    height: 27px;

    position: absolute;
    top: -12px;
    right: -12px;

    background: #2e78ff;
    border-radius: 50%;
    color: #ececec;
  }
`;
