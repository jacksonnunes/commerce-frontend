import React, { useCallback, useEffect, useState } from 'react';
import { FiEdit2, FiPlusSquare, FiXSquare } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  Content,
  AddressContent,
  IconsSection,
  RadioButton,
} from './styles';

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

const Address: React.FC = () => {
  const history = useHistory();

  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    async function loadAddresses(): Promise<void> {
      const response = await api.get<Address[]>(`/addresses`);

      const userAddresses = response.data;

      setAddresses(userAddresses);
    }

    loadAddresses();
  }, []);

  const handleCreateAddress = useCallback(() => {
    history.push('/address/create');
  }, [history]);

  return (
    <>
      <Header />
      <Container>
        <Button onClick={handleCreateAddress}>
          <FiPlusSquare />
          Novo endereço
        </Button>

        <Content>
          {addresses.map(address => (
            <AddressContent key={address.id}>
              <RadioButton>
                <input type="radio" name="setDefault" id={address.id} />
              </RadioButton>
              <div>
                <span>
                  {`${address.street}, ${address.address_number}`}
                  {address.complement && ` - ${address.complement}`}
                </span>

                <br />
                <span>{`${address.neighborhood} - ${address.city}/${address.state}`}</span>
              </div>
              <IconsSection>
                <FiEdit2 size={24} style={{ color: '#2E78FF' }} />
                <FiXSquare size={24} style={{ color: '#FB3403' }} />
              </IconsSection>
            </AddressContent>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Address;
