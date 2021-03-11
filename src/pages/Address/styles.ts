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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;

  width: 100%;
  max-width: 550px;

  margin: 8px;
  padding: 16px;
  background: #fcfdff;
  box-shadow: 4px 4px 14px rgba(204, 204, 204, 0.25);
  border-radius: 8px;
`;

export const IconsSection = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 12px;

  svg {
    cursor: pointer;
  }

  svg:first-child {
    margin-right: 40px;
  }
`;