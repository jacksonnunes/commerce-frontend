import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductRegisterProvider } from './productRegister';
import { ProductDetailsProvider } from './productDetails';
import { CartProvider } from './cart';
import { AddressProvider } from './address';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <CartProvider>
        <ProductDetailsProvider>
          <ProductRegisterProvider>
            <AddressProvider>{children}</AddressProvider>
          </ProductRegisterProvider>
        </ProductDetailsProvider>
      </CartProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
