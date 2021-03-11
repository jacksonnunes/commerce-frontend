import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductRegisterProvider } from './productRegister';
import { ProductDetailsProvider } from './productDetails';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <CartProvider>
        <ProductDetailsProvider>
          <ProductRegisterProvider>{children}</ProductRegisterProvider>
        </ProductDetailsProvider>
      </CartProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
