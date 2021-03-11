import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiClipboard,
  FiList,
  FiLogOut,
  FiMail,
  FiSettings,
  FiUser,
} from 'react-icons/fi';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

interface DropMenuProps {
  isOpen: boolean;
}

const DropMenu: React.FC<DropMenuProps> = ({ isOpen, ...rest }) => {
  const { signOut, user } = useAuth();

  return (
    <Container isOpen={isOpen} {...rest}>
      <Link to="/orders">
        <FiList size={22} />
        Pedidos
      </Link>
      <Link to="/account">
        <FiUser size={22} />
        Gerenciar conta
      </Link>
      <Link to="/address">
        <FiMail size={22} />
        Endereços
      </Link>
      {user.role === 'user_admin' && (
        <>
          <Link to="/products-management">
            <FiClipboard size={22} />
            Gerenciar produtos
          </Link>
          <Link to="/orders">
            <FiSettings size={22} />
            Administrativo
          </Link>
        </>
      )}
      <Link to="/" onClick={() => signOut()}>
        <FiLogOut size={22} />
        Sair
      </Link>
    </Container>
  );
};

export default DropMenu;
