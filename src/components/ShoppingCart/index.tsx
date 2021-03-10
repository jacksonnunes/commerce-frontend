import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/cart';

import { Container } from './styles';

const ShoppingCart: React.FC = () => {
  const { cartLength } = useCart();

  return (
    <Container>
      <Link to="/cart">
        <FiShoppingCart size={26} />
        {cartLength() > 0 && (
          <div className="order-notification">{cartLength()}</div>
        )}
      </Link>
    </Container>
  );
};

export default ShoppingCart;
