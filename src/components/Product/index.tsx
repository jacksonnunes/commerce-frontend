import React, { HTMLAttributes } from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container, ProductDetails, PlusButton } from './styles';

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
  description,
  price,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <img src={src} alt={name} />
      <ProductDetails>
        <strong>{name}</strong>
        <p>{description}</p>
        <h3>{price}</h3>
      </ProductDetails>
      <PlusButton>
        <FiPlus size={32} />
      </PlusButton>
    </Container>
  );
};

export default Product;
