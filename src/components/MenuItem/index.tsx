import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface MenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src: string;
  text: string;
  isSelected?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  src,
  isSelected,
  ...rest
}) => (
  <Container isSelected={isSelected} {...rest}>
    <img src={src} alt="" />
    <p>{text}</p>
  </Container>
);

export default MenuItem;
