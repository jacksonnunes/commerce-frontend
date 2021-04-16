import React, { useCallback, useEffect, useState } from 'react';
import {
  FiCheckCircle,
  FiEdit2,
  FiPlusSquare,
  FiXSquare,
} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useAddress } from '../../hooks/address';

import Button from '../../components/Button';
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
  default_address: boolean;
}

const Address: React.FC = () => {
  const history = useHistory();
  const { setContextAddress } = useAddress();

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

  const handleSetDefaultAddress = useCallback(async address_id => {
    await api.put(`/addresses/set-default/${address_id}`);

    const response = await api.get<Address[]>(`/addresses`);

    const userAddresses = response.data;

    setAddresses(userAddresses);
  }, []);

  const handleUpdateAddress = useCallback(
    address => {
      setContextAddress(address);

      history.push('/address/update');
    },
    [setContextAddress, history],
  );

  const handleDeleteAddress = useCallback(async address_id => {
    await api.delete(`/addresses/delete/${address_id}`);

    const response = await api.get<Address[]>(`/addresses`);

    const userAddresses = response.data;

    setAddresses(userAddresses);
  }, []);

  return (
    <>
      <Container>
        <Button onClick={handleCreateAddress}>
          <FiPlusSquare />
          Novo endereço
        </Button>

        <Content>
          {addresses.map(address => (
            <AddressContent
              key={address.id}
              onClick={() => handleSetDefaultAddress(address.id)}
            >
              {address.default_address && <FiCheckCircle size={24} />}
              <div>
                <span>
                  {`${address.street}, ${address.address_number}`}
                  {address.complement && ` - ${address.complement}`}
                </span>

                <br />
                <span>{`${address.neighborhood} - ${address.city}/${address.state}`}</span>
              </div>
              <IconsSection>
                <FiEdit2
                  size={24}
                  style={{ color: '#2E78FF' }}
                  onClick={() => handleUpdateAddress(address)}
                />
                <FiXSquare
                  size={24}
                  style={{ color: '#FB3403' }}
                  onClick={() => handleDeleteAddress(address.id)}
                />
              </IconsSection>
            </AddressContent>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Address;
