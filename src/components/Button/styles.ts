import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  padding: 18px;
  background: #febd2e;
  border: 2px solid #febd2e;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;

  margin-top: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: ${shade(0.2, '#febd2e')};
    border: 2px solid ${shade(0.2, '#febd2e')};
  }

  svg {
    margin-left: 14px;
  }
`;
