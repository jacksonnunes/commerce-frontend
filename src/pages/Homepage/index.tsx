/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import MenuItem from '../../components/MenuItem';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import {
  Title,
  Menu,
  Aside,
  Content,
  ProductsContainer,
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
  available_quantity: number;
  price: number;
  image: string;
}

const Homepage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getCategories(): Promise<void> {
      const response = await api.get<Category[]>('/categories');
      const categoriesList = response.data;
      setCategories(categoriesList);

      const firstCategory = categoriesList[0];
      const categoryName = firstCategory.category_name;
      const resp = await api.get<Product[]>(`/products/${categoryName}`);
      const productsList = resp.data;

      setProducts(productsList);
    }
    getCategories();
  }, []);

  const handleGetProductsByCategories = useCallback(async (
    categoryName: string,
  ) => {
    const response = await api.get<Product[]>(`/products/${categoryName}`);

    const newProductsList = response.data;

    setProducts(newProductsList);
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Title>Nossos produtos</Title>
        <Menu>
          <Aside>
            {categories.map(category => (
              <MenuItem
                key={category.id}
                src={`http://localhost:3333/files/${category.icon_image}`}
                onClick={() =>
                  handleGetProductsByCategories(category.category_name)}
                text={category.category_name}
              />
            ))}
          </Aside>
          <ProductsContainer>
            {products.map(product => (
              <Product
                key={product.id}
                src={`http://localhost:3333/files/${product.image}`}
                name={product.name}
                description={product.description}
                quantity={product.available_quantity}
                price={formatValue(product.price)}
              />
            ))}
          </ProductsContainer>
        </Menu>

        <Footer />
      </Content>
    </>
  );
};

export default Homepage;
