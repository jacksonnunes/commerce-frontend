import React, { createContext, useCallback, useContext, useState } from 'react';

import ProductRegister from '../components/ProductRegister';

interface ProductRegisterContextData {
  addProductRegister(): void;
  removeProductRegister(): void;
}

const ProductRegisterContext = createContext<ProductRegisterContextData>(
  {} as ProductRegisterContextData,
);

export const ProductRegisterProvider: React.FC = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  const addProductRegister = useCallback(() => {
    setIsShown(true);
  }, []);

  const removeProductRegister = useCallback(() => {
    setIsShown(false);
  }, []);

  return (
    <ProductRegisterContext.Provider
      value={{ addProductRegister, removeProductRegister }}
    >
      {children}
      <ProductRegister isShown={isShown} />
    </ProductRegisterContext.Provider>
  );
};

export function useProductForm(): ProductRegisterContextData {
  const context = useContext(ProductRegisterContext);

  if (!context) {
    throw new Error(
      'useProductForm must be used within a ProductRegisterProvider',
    );
  }

  return context;
}
