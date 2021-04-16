import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
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
