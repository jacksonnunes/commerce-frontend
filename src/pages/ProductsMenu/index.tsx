import React, { useCallback, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import MenuItem from '../../components/MenuItem';
import Product from '../../components/Product';

import {
  CategoriesContainer,
  Content,
  ProductsContainer,
  MiddleSection,
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

const Homepage: React.FC = () => {
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
          <div>
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
          </div>
        </ProductsContainer>
      </main>
    </Content>
  );
};

export default Homepage;
