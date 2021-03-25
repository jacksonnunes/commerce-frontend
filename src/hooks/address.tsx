import React, { createContext, useCallback, useContext, useState } from 'react';

interface Address {
  id: string;
  street: string;
  address_number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  default_address: boolean;
}

interface AddressContextData {
  address: Address;
  setContextAddress(address: Address): void;
  setContextAddressNull(): void;
}

const AddressContext = createContext<AddressContextData>(
  {} as AddressContextData,
);

export const AddressProvider: React.FC = ({ children }) => {
  const [address, setAddress] = useState<Address>({} as Address);

  const setContextAddress = useCallback(newAddress => {
    setAddress(newAddress);
  }, []);

  const setContextAddressNull = useCallback(() => {
    setAddress({} as Address);
  }, []);

  return (
    <AddressContext.Provider
      value={{
        address,
        setContextAddress,
        setContextAddressNull,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export function useAddress(): AddressContextData {
  const context = useContext(AddressContext);

  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider');
  }

  return context;
}
