import React, { useMemo } from 'react';
import { FiEdit, FiThumbsUp, FiXSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { useCart } from '../../hooks/cart';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Product,
  ProductInfo,
  ProductInfo2,
  Address,
  OrderInfo,
} from './styles';

const Cart: React.FC = () => {
  const { products, cartLength, removeFromCart } = useCart();

  const cartSubtotal = useMemo(() => {
    const subtotal = products.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);

    return subtotal;
  }, [products]);

  const deliveryTax = useMemo(() => {
    return 4;
  }, []);

  const cartTotal = useMemo(() => {
    return formatValue(cartSubtotal + deliveryTax);
  }, [cartSubtotal, deliveryTax]);

  return (
    <>
      <Header />
      <Container>
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

                <FiXSquare
                  size={24}
                  style={{ color: '#FB3403' }}
                  onClick={() => removeFromCart(product)}
                />
              </div>
            </ProductInfo2>
          </Product>
        ))}

        <Address>
          <div>
            <p>Endereço de entrega</p>
            <span>Rua Aderaldo Ferreira, 165 - Casa</span>

            <br />
            <span>Alto Boa Vista - Quixadá/CE</span>
          </div>
          <Link to="/addresses">Trocar endereço</Link>
        </Address>

        <OrderInfo>
          <p>{`Subtotal: ${formatValue(cartSubtotal)}`}</p>
          <p>{`Taxa de entrega: ${formatValue(deliveryTax)}`}</p>
          <p>{`Total: ${cartTotal}`}</p>

          <Button>
            <FiThumbsUp />
            Confirmar pedido
          </Button>
        </OrderInfo>
      </Container>
    </>
  );
};

export default Cart;
