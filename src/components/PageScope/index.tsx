import React, { HTMLAttributes } from 'react';

import { FiShoppingBag } from 'react-icons/fi';
import Menu from '../Menu';
import logoImg from '../../assets/images/logo.svg';

import { Container, Content, ContentHeader } from './styles';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const PageScope: React.FC<ContainerProps> = ({ title, children }) => {
  return (
    <Container>
      <aside>
        <img src={logoImg} alt="Rivoli Confeitaria" />
        <Menu />
      </aside>
      <Content>
        <ContentHeader>
          <h1>{title}</h1>
          <div>
            <FiShoppingBag size={32} />
          </div>
        </ContentHeader>
        {children}
      </Content>
    </Container>
  );
};

export default PageScope;
