import React from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiClipboard, FiHome, FiSettings } from 'react-icons/fi';

import { Container } from './styles';

// import { useAuth } from '../../hooks/auth';

const DropMenu: React.FC = () => {
  // const { signOut, user } = useAuth();

  return (
    <Container>
      <Link to="/home">
        <div>
          <FiHome size={35} />
        </div>
        Início
      </Link>
      <Link to="/account">
        <div>
          <FiBookOpen size={35} />
        </div>
        Menu
      </Link>
      <Link to="/address">
        <div>
          <FiClipboard size={35} />
        </div>
        Pedidos
      </Link>
      <Link to="/address">
        <div>
          <FiSettings size={35} />
        </div>
        Config.
      </Link>
    </Container>
  );
};

export default DropMenu;
