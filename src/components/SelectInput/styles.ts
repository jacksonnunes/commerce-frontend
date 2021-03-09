import ReactSelect from 'react-select';
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 10px 16px;
  background: #242424;
  border-radius: 10px;

  display: flex;
  align-items: center;

  border: 2px solid #242424;
  color: #bbbbbb;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `};

  ${props =>
    props.isFocused &&
    css`
      color: #febd2e;
      border: 2px solid #febd2e;
    `};

  ${props =>
    props.isFilled &&
    css`
      color: #febd2e;
    `};

  .select {
    flex: 1;
    color: #242424;
    font-size: 18px;
    padding: 0;

    &::placeholder {
      color: #bbbbbb;
    }

    .react-select-container {
      background: transparent;
    }
  }

  svg {
    margin-right: 6px;
  }
`;

export const CustomSelect = styled(ReactSelect)``;

export const Error = styled(Tooltip)`
  height: 22px;
  margin-left: 16px;

  span {
    background: #c53030;
    color: #ececec;

    &::before {
      border-color: #c53030 transparent;
    }
  }

  svg {
    margin: 0;
  }
`;
