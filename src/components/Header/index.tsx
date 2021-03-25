import React, { useState } from 'react';
import { FiChevronDown, FiUser } from 'react-icons/fi';
import { ClickAwayListener } from '@material-ui/core';

import { Link } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart';
import DropMenu from '../DropMenu';

import { Container, DropMenuContainer, MenuButton } from './styles';

import logoImgBlack from '../../assets/logo_black_inline.svg';
import logoImgWhite from '../../assets/logo_white_inline.svg';

interface HeaderProps {
  isAdm?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAdm, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container isAdm={isAdm} {...rest}>
      <Link to="/home">
        <img
          src={`${isAdm ? logoImgWhite : logoImgBlack}`}
          alt="Rivoli Confeitaria"
          className="logo-img"
        />
      </Link>
      <div>
        <ShoppingCart />
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <DropMenuContainer>
            <MenuButton onClick={() => setIsOpen(!isOpen)}>
              <FiUser size={26} />
              <FiChevronDown size={26} />
            </MenuButton>
            <DropMenu isOpen={isOpen} />
          </DropMenuContainer>
        </ClickAwayListener>
      </div>
    </Container>
  );
};

export default Header;
