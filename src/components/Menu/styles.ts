import styled, { css } from 'styled-components';

interface OptionProps {
  isSelected: boolean;
}

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media only screen and (max-width: 1499px) {
    flex-direction: row;
    align-items: center;
    flex: 0;

    margin-right: 8px;
  }
`;

export const Option = styled.div<OptionProps>`
  margin: 0 22px;
  height: 88px;
  background: transparent;
  border-radius: 30px;
  padding-right: 16px;

  transition: all 0.2s ease;

  & + div {
    margin-top: 24px;
  }

  a {
    display: flex;
    align-items: center;

    color: var(--orange);

    text-decoration: none;
    font-size: 22px;
    font-weight: 600;

    transition: all 0.2s ease;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 16px;
      width: 88px;
      height: 88px;
      background: var(--background-secondary);
      border-radius: 30px;

      transition: all 0.2s ease;
    }
  }

  &:hover {
    background: var(--orange);

    a {
      color: var(--background-secondary);

      div {
        background: var(--orange-hard);
      }
    }
  }

  ${props =>
    props.isSelected &&
    css`
      background: var(--orange);

      a {
        color: var(--background-secondary);

        div {
          background: var(--orange-hard);
        }
      }
    `}

  @media only screen and (max-width: 1499px) {
    margin: 0 8px;
    min-width: 200px;
    border-radius: 10px;

    & + div {
      margin-top: 0;
    }

    a {
      div {
        border-radius: 10px;
      }
    }
  }

  @media only screen and (max-width: 1179px) {
    padding-right: 0;
    min-width: 0px;

    a {
      div {
        margin-right: 0;
      }

      span {
        display: none;
      }
    }
  }
`;
