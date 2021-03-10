import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

import ProductDetails from '../pages/ProductDetails';

interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}

interface ProductDetailsContextData {
  addProductDetails(id: string): void;
  removeProductDetails(): void;
}

const ProductDetailsContext = createContext<ProductDetailsContextData>(
  {} as ProductDetailsContextData,
);

export const ProductDetailsProvider: React.FC = ({ children }) => {
  const [isShown, setIsShown] = useState(false);
  const [product, setProduct] = useState<Product>({} as Product);

  const addProductDetails = useCallback(async (id: string) => {
    const response = await api.get<Product>(`/products/${id}`);

    const prod = response.data;

    setProduct(prod);
    setIsShown(true);
  }, []);

  const removeProductDetails = useCallback(() => {
    setIsShown(false);
  }, []);

  return (
    <ProductDetailsContext.Provider
      value={{ addProductDetails, removeProductDetails }}
    >
      {children}
      <ProductDetails isShown={isShown} product={product} />
    </ProductDetailsContext.Provider>
  );
};

export function useProductDetails(): ProductDetailsContextData {
  const context = useContext(ProductDetailsContext);

  if (!context) {
    throw new Error(
      'useProductDetails must be used within a ProductDetailsProvider',
    );
  }

  return context;
}
