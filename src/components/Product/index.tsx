import React, { AnchorHTMLAttributes } from 'react';

import { Container } from './styles';

interface ProductProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  src: string;
  name: string;
  description: string;
  quantity: number;
  price: string;
}

const Product: React.FC<ProductProps> = ({
  src,
  name,
  description,
  quantity,
  price,
  ...rest
}) => (
  <Container {...rest}>
    <div className="product-header">
      <img src={src} alt="product" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
    <div className="product-footer">
      <p>
        {quantity > 1
          ? `Disponíveis: ${quantity} unidades`
          : `Disponível: ${quantity} unidade`}
      </p>
      <h3>{price}</h3>
    </div>
  </Container>
);

export default Product;
