import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1150px;

  button {
    margin: 32px 8px;
    background: #2e78ff;
    border-color: #2e78ff;
    color: #ececec;

    font-size: 18px;
    font-weight: 400;

    svg {
      margin-right: 8px;
    }

    &:hover {
      background: ${shade(0.2, '#2e78ff')};
      border-color: ${shade(0.2, '#2e78ff')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media only screen and (max-width: 1131px) {
    justify-content: center;
  }
`;

export const AddressContent = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  z-index: 0;

  width: 100%;
  max-width: 550px;

  margin: 8px;
  padding: 16px;
  background: #fcfdff;
  box-shadow: 4px 4px 14px rgba(204, 204, 204, 0.25);
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }

  > svg {
    color: #09b03e;
    margin-right: 16px;
  }
`;

export const IconsSection = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  z-index: -1;

  svg {
    cursor: pointer;
  }

  svg:first-child {
    margin-right: 40px;
  }
`;
