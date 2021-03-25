import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiEdit, FiThumbsUp, FiXSquare } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Product,
  ProductInfo,
  ProductInfo2,
  AddressContainer,
  OrderInfo,
} from './styles';

interface Address {
  id: string;
  street: string;
  address_number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

const Cart: React.FC = () => {
  const { user } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const { products, cartLength, removeFromCart, cleanCart } = useCart();
  const [address, setAddress] = useState<Address>({} as Address);

  useEffect(() => {
    async function loadAddress(): Promise<void> {
      const response = await api.get('/addresses/default');

      const userAddress = response.data;

      setAddress(userAddress);
    }

    loadAddress();
  }, []);

  const cartSubtotal = useMemo(() => {
    if (!products) {
      return undefined;
    }

    const subtotal = products.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);

    return subtotal;
  }, [products]);

  const deliveryTax = useMemo(() => {
    return 4;
  }, []);

  const cartTotal = useMemo(() => {
    if (!cartSubtotal) {
      return undefined;
    }

    return cartSubtotal + deliveryTax;
  }, [cartSubtotal, deliveryTax]);

  const handleConfirmOrder = useCallback(async () => {
    try {
      const orderData = {
        user_id: user.id,
        address_id: address.id,
        products,
        delivery_tax: deliveryTax,
        subtotal: cartSubtotal,
        total: cartTotal,
        money: null,
      };

      await api.post('/orders', orderData);

      cleanCart();

      addToast({
        title: 'Pedido encaminhado',
        description: 'Seu pedido logo chegará até você!',
      });

      history.push('/orders');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro no cadastramento',
        description: `${err}`,
      });
    }
  }, [
    user.id,
    address.id,
    products,
    deliveryTax,
    cartSubtotal,
    cartTotal,
    cleanCart,
    addToast,
    history,
  ]);

  return (
    <>
      <Header />
      <Container>
        <h2>
          {cartLength() > 1
            ? `Carrinho de compras (${cartLength()} itens)`
            : `Carrinho de compras (${cartLength()} item)`}
        </h2>

        {products &&
          products.map(product => (
            <Product key={product.id}>
              <img
                src={`http://localhost:3333/files/${product.image}`}
                alt=""
              />

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

        {products && (
          <>
            <AddressContainer>
              <div>
                <p>Endereço de entrega</p>
                <span>
                  {`${address.street}, ${address.address_number}`}
                  {address.complement && ` - ${address.complement}`}
                </span>

                <br />
                <span>{`${address.neighborhood} - ${address.city}/${address.state}`}</span>
              </div>
              <Link to="/address">Trocar endereço</Link>
            </AddressContainer>

            <OrderInfo>
              <p>{cartSubtotal && `Subtotal: ${formatValue(cartSubtotal)}`}</p>
              <p>{`Taxa de entrega: ${formatValue(deliveryTax)}`}</p>
              <p>{cartTotal && `Total: ${formatValue(cartTotal)}`}</p>

              <Button onClick={() => handleConfirmOrder()}>
                <FiThumbsUp />
                Confirmar pedido
              </Button>
            </OrderInfo>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
