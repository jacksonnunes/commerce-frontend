import React, { useEffect, useState } from 'react';
import { FiEdit2, FiPlusSquare, FiXSquare } from 'react-icons/fi';

import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../services/api';

import { Container, Content, AddressContent, IconsSection } from './styles';

interface Address {
  id: string;
  street: string;
  address_number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

const Address: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    async function loadAddresses(): Promise<void> {
      const response = await api.get<Address[]>(`/addresses`);

      const userAddresses = response.data;

      setAddresses(userAddresses);
    }

    loadAddresses();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Button>
          <FiPlusSquare />
          Novo endereço
        </Button>

        <Content>
          {addresses.map(address => (
            <AddressContent key={address.id}>
              <IconsSection>
                <FiEdit2 size={24} style={{ color: '#2E78FF' }} />
                <FiXSquare size={24} style={{ color: '#FB3403' }} />
              </IconsSection>
              <div>
                <span>
                  {`${address.street}, ${address.address_number}`}
                  {address.complement && ` - ${address.complement}`}
                </span>

                <br />
                <span>{`${address.neighborhood} - ${address.city}/${address.state}`}</span>
              </div>
            </AddressContent>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Address;
