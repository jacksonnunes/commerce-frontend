import React, { useCallback, useEffect, useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import Button from '../../components/Button';
import MenuItem from '../../components/MenuItem';
import Header from '../../components/Header';
import Product from '../../components/Product';
import ProductForm from '../../components/ProductForm';

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
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [isShown, setIsShown] = useState(false);

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
      <ProductForm isShown={isShown} />
      <Header isAdm />

      <Container>
        <Title>Gerenciamento de Produtos</Title>
        <Button onClick={() => setIsShown(true)}>
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
                isAdm
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
                isAdm
              />
            ))}
          </ProductsContainer>
        </Menu>
      </Container>
    </>
  );
};

export default ProductManagement;
