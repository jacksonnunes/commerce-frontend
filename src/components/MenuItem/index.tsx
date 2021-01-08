import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, src, ...rest }) => (
  <Container {...rest}>
    <img src={src} alt="" />
    <p>{text}</p>
  </Container>
);

export default MenuItem;
