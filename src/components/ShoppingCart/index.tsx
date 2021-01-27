import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { Container } from './styles';

const ShoppingCart: React.FC = () => (
  <Container>
    <FiShoppingCart size={26} />
    <div className="order-notification">2</div>
  </Container>
);

export default ShoppingCart;
