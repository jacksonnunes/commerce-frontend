import React, { HTMLAttributes } from 'react';

import { Container, Header, Footer } from './styles';

interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  name: string;
  description: string;
  quantity: number;
  price: string;
}

const Product: React.FC<ProductProps> = ({
  src,
  name,
  quantity,
  price,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Header>
        <img src={src} alt={name} />
        <h3>{name}</h3>
      </Header>
      <Footer>
        <p>
          {quantity > 1
            ? `Disponíveis: ${quantity} unidades`
            : `Disponível: ${quantity} unidade`}
        </p>
        <h3>{price}</h3>
      </Footer>
    </Container>
  );
};

export default Product;
