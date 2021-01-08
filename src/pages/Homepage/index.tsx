/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import MenuItem from '../../components/MenuItem/index';
import Product from '../../components/Product/index';

import {
  Header,
  Title,
  Menu,
  Aside,
  Content,
} from './styles';
import logoImg from '../../assets/images/rivoli_logo_black.png';
import homepageImg from '../../assets/images/homepage_image.png';

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

  async function handleGetProductsByCategories(
    categoryName: string,
  ): Promise<void> {
    const response = await api.get<Product[]>(`/products/${categoryName}`);

    const newProductsList = response.data;

    setProducts(newProductsList);
  }

  return (
    <>
      <Header>
        <img src={logoImg} alt="Rivoli Confeitaria" className="logo-img" />
        <img
          src={homepageImg}
          alt="Imagem da Página Inicial"
          className="homepage-img"
        />
        <div>
          <Link to="/signin">Login</Link>
          <Link to="/signup">Cadastre-se</Link>
        </div>
      </Header>
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
        </Menu>
      </Content>
    </>
  );
};

export default Homepage;
