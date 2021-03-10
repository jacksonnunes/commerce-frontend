import React, { createContext, useCallback, useContext, useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
}

interface CartState {
  products: Product[];
}

interface CartContextData {
  products: Product[];
  addToCart(productData: Product): void;
  removeFromCart(product: Product): void;
  cartLength(): number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CartState>(() => {
    const productsIntoCart = localStorage.getItem(
      '@RivoliConf:productsIntoCart',
    );

    if (productsIntoCart) {
      return { products: JSON.parse(productsIntoCart) };
    }

    return {} as CartState;
  });

  const addToCart = useCallback((productData: Product) => {
    const productsIntoCart = localStorage.getItem(
      '@RivoliConf:productsIntoCart',
    );

    let products: Product[] = [];

    if (productsIntoCart) {
      products = JSON.parse(productsIntoCart);

      const checkProductExists = products.find(p => p.id === productData.id);

      if (!checkProductExists) {
        products.push(productData);

        localStorage.setItem(
          '@RivoliConf:productsIntoCart',
          JSON.stringify(products),
        );

        setData({ products });
      } else {
        checkProductExists.quantity += productData.quantity;

        products.push(productData, ...products);

        localStorage.setItem(
          '@RivoliConf:productsIntoCart',
          JSON.stringify(products),
        );

        setData({ products });
      }
    } else {
      products.push(productData);

      localStorage.setItem(
        '@RivoliConf:productsIntoCart',
        JSON.stringify(products),
      );

      setData({ products });
    }
  }, []);

  const removeFromCart = useCallback((product: Product) => {
    const productsIntoCart = localStorage.getItem(
      '@RivoliConf:productsIntoCart',
    );

    if (!productsIntoCart) {
      return;
    }

    const products: Product[] = JSON.parse(productsIntoCart);

    const newProductsList = products.filter(prod => prod.id !== product.id);

    localStorage.setItem(
      '@RivoliConf:productsIntoCart',
      JSON.stringify(newProductsList),
    );

    setData({ products: newProductsList });
  }, []);

  const cartLength = useCallback(() => {
    const productsIntoCart = localStorage.getItem(
      '@RivoliConf:productsIntoCart',
    );

    if (!productsIntoCart) {
      return 0;
    }

    const products: Product[] = JSON.parse(productsIntoCart);

    return products.length;
  }, []);

  return (
    <CartContext.Provider
      value={{
        products: data.products,
        addToCart,
        removeFromCart,
        cartLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
