import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import MenuItem from '../../components/MenuItem';
import Product from '../../components/Product';
import PageScope from '../../components/PageScope';

import {
  CategoriesContainer,
  Content,
  ProductsContainer,
  MiddleSection,
  Announcement,
  Middle,
  Orders,
  Order,
} from './styles';

interface Category {
  id: string;
  category_name: string;
  icon_image: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: 'pending' | 'preparing' | 'out' | 'done';
  orders_products: [
    {
      id: string;
      quantity: number;
      price: number;
      product: {
        name: string;
      };
    },
  ];
}

const orderStatus = {
  pending: <span>Aguardando confirmação</span>,
  preparing: <span>Em preparo</span>,
  out: <span>Saiu para entrega</span>,
  done: <span>Entregue</span>,
};

const Homepage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get<Category[]>('/categories');
      const categoriesList = response.data;
      setCategories(categoriesList);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      if (selectedCategory) {
        const response = await api.get<Product[]>(
          `/products/category/${selectedCategory}`,
        );

        const productsList = response.data;

        setProducts(productsList);
      } else {
        const response = await api.get<Product[]>('/products');

        const productsList = response.data;

        setProducts(productsList);
      }
    }
    loadProducts();
  }, [selectedCategory]);

  useEffect(() => {
    async function loadOrders(): Promise<void> {
      api.get<Order[]>('/orders/me').then(response => {
        const ordersFormatted = response.data.map(order => {
          return {
            ...order,
            date: format(parseISO(order.date), 'dd/MM/yyyy'),
          };
        });

        if (ordersFormatted.length > 3) {
          const lastThreeOrders = ordersFormatted.slice(-3);

          lastThreeOrders.reverse();

          setOrders(lastThreeOrders);
        } else {
          ordersFormatted.reverse();

          setOrders(ordersFormatted);
        }
      });
    }

    loadOrders();
  }, []);

  const handleSelectCategory = useCallback(
    (category_id: string) => {
      if (selectedCategory === category_id) {
        setSelectedCategory(undefined);
      } else {
        setSelectedCategory(category_id);
      }
    },
    [selectedCategory],
  );

  return (
    <PageScope title="Bem-vindo(a)!">
      <Content>
        <main>
          <CategoriesContainer>
            {categories.map(category => (
              <MenuItem
                key={category.id}
                src={`http://localhost:3333/files/${category.icon_image}`}
                onClick={() => handleSelectCategory(category.id)}
                text={category.category_name}
                isSelected={selectedCategory === category.id}
              />
            ))}
          </CategoriesContainer>

          <MiddleSection>
            <h1>Todos os itens</h1>
            <div>
              <input type="text" placeholder="Buscar item..." />
              <button type="button">
                <FiSearch size={24} />
              </button>
            </div>
          </MiddleSection>

          <ProductsContainer>
            {products.map(product => (
              <Product
                key={product.id}
                src={`http://localhost:3333/files/${product.image}`}
                name={product.name}
                description={product.description}
                quantity={product.quantity}
                price={formatValue(product.price)}
              />
            ))}
          </ProductsContainer>
        </main>
        <aside>
          <Announcement />

          <Middle>
            <h2>Pedidos</h2>

            <div>
              <FiChevronRight size={24} />
            </div>
          </Middle>

          <Orders>
            {orders.map(order => (
              <Order key={order.id} status={order.status}>
                <section>
                  <span>{order.date}</span>
                  {orderStatus[order.status]}
                </section>
                {order.orders_products.map(order_product => (
                  <div>
                    <span>{`${order_product.quantity} ${order_product.product.name}`}</span>
                    <span>{formatValue(order_product.price)}</span>
                  </div>
                ))}
              </Order>
            ))}
          </Orders>
        </aside>
      </Content>
    </PageScope>
  );
};

export default Homepage;
