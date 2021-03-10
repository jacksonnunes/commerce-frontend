import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductRegisterProvider } from './productRegister';
import { ProductDetailsProvider } from './productDetails';
import { CartProvider } from './cart';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <CartProvider>
        <ProductDetailsProvider>
          <ProductRegisterProvider>{children}</ProductRegisterProvider>
        </ProductDetailsProvider>
      </CartProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
