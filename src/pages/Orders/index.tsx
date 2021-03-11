import React, { useCallback, useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

import Header from '../../components/Header';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Content,
  Ticket,
  TicketHeader,
  TicketUpdate,
  Products,
  Bill,
  Address,
} from './styles';

interface Order {
  id: string;
  order_number: number;
  date: Date;
  status: string;
  delivery_tax: number;
  subtotal: number;
  total: number;
  money: number;
  updated_at: Date;
  address: {
    street: string;
    address_number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  orders_products: [
    {
      quantity: number;
      price: number;
      product: {
        name: string;
      };
    },
  ];
}

const Cart: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function loadOrders(): Promise<void> {
      const response = await api.get('/orders/me');

      const userOrders = response.data;

      setOrders(userOrders);
    }

    loadOrders();
  }, []);

  const productTotalValue = useCallback((quantity, value) => {
    return formatValue(quantity * value);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h2>Pedidos</h2>
        <Content>
          {orders.map(order => (
            <Ticket key={order.id}>
              <TicketHeader>
                <strong>{`# ${order.order_number}`}</strong>
                <span>
                  Aguardando confirmação
                  <FiClock />
                </span>
              </TicketHeader>

              <TicketUpdate>
                <span>Atualizado em 11/03/2021 às 09:30</span>
              </TicketUpdate>

              <Products>
                {order.orders_products.map(order_product => (
                  <div>
                    <span>{`${order_product.quantity}x ${order_product.product.name}`}</span>
                    <span>
                      {productTotalValue(
                        order_product.quantity,
                        order_product.price,
                      )}
                    </span>
                  </div>
                ))}
              </Products>

              <Bill>
                <div>
                  <span>Subtotal</span>
                  <span>{formatValue(order.subtotal)}</span>
                </div>
                <div>
                  <span>Taxa de entrega</span>
                  <span>{formatValue(order.delivery_tax)}</span>
                </div>
                <div>
                  <span>Total</span>
                  <span>{formatValue(order.total)}</span>
                </div>
                {order.money && (
                  <div>
                    <span>Troco para:</span>
                    <span>{formatValue(order.money)}</span>
                  </div>
                )}
              </Bill>

              <Address>
                <strong>Endereço de entrega</strong>
                <span>
                  {`${order.address.street}, ${order.address.address_number}`}
                  {order.address.complement && ` - ${order.address.complement}`}
                </span>
                <span>{`${order.address.neighborhood} - ${order.address.city}/${order.address.state}`}</span>
              </Address>
            </Ticket>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Cart;
