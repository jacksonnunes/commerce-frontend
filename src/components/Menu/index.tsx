import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiBookOpen, FiClipboard, FiHome, FiSettings } from 'react-icons/fi';

import { Container, Option } from './styles';

// import { useAuth } from '../../hooks/auth';

const DropMenu: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  // const { signOut, user } = useAuth();

  const handleSelectedOption = useCallback((optionNumber: number) => {
    setSelectedOption(optionNumber);
  }, []);

  return (
    <Container>
      <Option
        isSelected={selectedOption === 1}
        onClick={() => handleSelectedOption(1)}
      >
        <Link to="/home">
          <div>
            <FiHome size={35} />
          </div>
          <span>Início</span>
        </Link>
      </Option>

      <Option
        isSelected={selectedOption === 2}
        onClick={() => handleSelectedOption(2)}
      >
        <Link to="/home">
          <div>
            <FiBookOpen size={35} />
          </div>
          <span>Menu</span>
        </Link>
      </Option>

      <Option
        isSelected={selectedOption === 3}
        onClick={() => handleSelectedOption(3)}
      >
        <Link to="/home">
          <div>
            <FiClipboard size={35} />
          </div>
          <span>Pedidos</span>
        </Link>
      </Option>

      <Option
        isSelected={selectedOption === 4}
        onClick={() => handleSelectedOption(4)}
      >
        <Link to="/home">
          <div>
            <FiSettings size={35} />
          </div>
          <span>Config.</span>
        </Link>
      </Option>
    </Container>
  );
};

export default DropMenu;
