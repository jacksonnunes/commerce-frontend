import React from 'react';
import { FiEdit, FiXSquare } from 'react-icons/fi';

import Header from '../../components/Header';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

import { Container, Product, ProductInfo, ProductInfo2 } from './styles';

const Cart: React.FC = () => {
  const { products, cartLength } = useCart();

  return (
    <Container>
      <Header />
      <h2>
        {cartLength() > 1
          ? `Carrinho de compras (${cartLength()} itens)`
          : `Carrinho de compras (${cartLength()} item)`}
      </h2>

      {products.map(product => (
        <Product key={product.id}>
          <img src={`http://localhost:3333/files/${product.image}`} alt="" />

          <ProductInfo>
            <h3>{product.name}</h3>
            <span>
              Qtde:
              {` ${product.quantity}`}
            </span>
          </ProductInfo>

          <ProductInfo2>
            <span>{formatValue(product.price * product.quantity)}</span>

            <div>
              <FiEdit size={24} style={{ color: '#2E78FF' }} />

              <FiXSquare size={24} style={{ color: '#FB3403' }} />
            </div>
          </ProductInfo2>
        </Product>
      ))}
    </Container>
  );
};

export default Cart;
