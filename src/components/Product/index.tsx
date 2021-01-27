import React from 'react';
import { FiEdit, FiXSquare } from 'react-icons/fi';

import { Container } from './styles';

interface ProductProps {
  src: string;
  name: string;
  description: string;
  quantity: number;
  price: string;
  isAdm?: boolean;
}

const Product: React.FC<ProductProps> = ({
  src,
  name,
  description,
  quantity,
  price,
  isAdm,
  ...rest
}) => {
  return (
    <Container isAdm={isAdm} {...rest}>
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
      {isAdm && (
        <div className="icons">
          <FiEdit size={24} color="#2E78FF" />
          <FiXSquare size={24} color="#FB3403" />
        </div>
      )}
    </Container>
  );
};

export default Product;
