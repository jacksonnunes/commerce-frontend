import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProductRegisterProvider } from './productRegister';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ProductRegisterProvider>{children}</ProductRegisterProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
