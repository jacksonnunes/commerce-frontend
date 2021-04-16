import React from 'react';
import {
  FiEdit,
  FiUser,
  FiPhone,
  FiAtSign,
  FiLock,
  FiMail,
} from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';

const AccountManagement: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Container>
        <h1>Gerenciamento de conta</h1>

        <Content>
          <div className="content-header">
            <p>Dados pessoais</p>
            <div>
              <FiEdit size={22} />
              <p>Editar</p>
            </div>
          </div>
          <div className="content">
            <FiUser size={22} />
            <p>{user.name}</p>
          </div>
          <div className="content">
            <FiPhone size={22} />
            <p>{user.phone}</p>
          </div>
          <div className="content">
            <FiAtSign size={22} />
            <p>{user.email}</p>
          </div>
          <div className="content-footer">
            <FiLock size={22} />
            <p>Alterar senha</p>
          </div>
          <div className="content-footer">
            <FiMail size={22} />
            <p>Gerenciar endereços</p>
          </div>
        </Content>
      </Container>
    </>
  );
};

export default AccountManagement;
