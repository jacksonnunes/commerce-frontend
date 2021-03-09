import React, { useCallback, useEffect, useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import { useProductForm } from '../../hooks/productRegister';

import Button from '../../components/Button';
import MenuItem from '../../components/MenuItem';
import Header from '../../components/Header';
import Product from '../../components/Product';

import noImage from '../../assets/images/no-image.png';

import { Container, Title, Menu, Aside, ProductsContainer } from './styles';

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

const ProductManagement: React.FC = () => {
  const { addProductRegister } = useProductForm();

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

  const handleGetProductsByCategories = useCallback(
    async (categoryName: string) => {
      const response = await api.get<Product[]>(`/products/${categoryName}`);

      const newProductsList = response.data;

      setProducts(newProductsList);
    },
    [],
  );

  return (
    <>
      <Header isAdm />

      <Container>
        <Title>Gerenciamento de Produtos</Title>
        <Button onClick={() => addProductRegister()}>
          <FiPlusSquare size={24} />
          Novo produto
        </Button>

        <Menu>
          <Aside>
            {categories.map(category => (
              <MenuItem
                key={category.id}
                src={`http://localhost:3333/files/${category.icon_image}`}
                onClick={() =>
                  // eslint-disable-next-line prettier/prettier
                  handleGetProductsByCategories(category.category_name)}
                text={category.category_name}
              />
            ))}
          </Aside>
          <ProductsContainer>
            {products.map(product => (
              <Product
                key={product.id}
                src={
                  product.image
                    ? `http://localhost:3333/files/${product.image}`
                    : `${noImage}`
                }
                name={product.name}
                description={product.description}
                quantity={product.available_quantity}
                price={formatValue(product.price)}
              />
            ))}
          </ProductsContainer>
        </Menu>
      </Container>
    </>
  );
};

export default ProductManagement;
