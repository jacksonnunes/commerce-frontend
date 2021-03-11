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
  quantity: number;
  price: number;
  image: string;
}

const ProductManagement: React.FC = () => {
  const { addProductRegister } = useProductForm();

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
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
                onClick={() => handleSelectCategory(category.id)}
                text={category.category_name}
                isSelected={selectedCategory === category.id}
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
                quantity={product.quantity}
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
