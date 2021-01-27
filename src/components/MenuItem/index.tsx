import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src: string;
  text: string;
  isAdm?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, src, isAdm, ...rest }) => (
  <Container isAdm={isAdm} {...rest}>
    <img src={src} alt="" />
    <p>{text}</p>
  </Container>
);

export default MenuItem;
