import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductRegisterProvider } from './productRegister';
import { CartProvider } from './cart';
import { AddressProvider } from './address';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <CartProvider>
        <ProductRegisterProvider>
          <AddressProvider>{children}</AddressProvider>
        </ProductRegisterProvider>
      </CartProvider>
    </AuthProvider>
  </ToastProvider>
);

export default AppProvider;
