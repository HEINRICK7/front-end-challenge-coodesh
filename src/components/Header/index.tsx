import React from 'react';

import * as C from './styled';
import Logo from '../../assets/logo.svg'

import { useNavigate } from 'react-router-dom';
const Header: React.FC = () => {

    const history = useNavigate();

  return (
      <>
      <C.Container>
          <C.Logo>
              <img src={Logo} alt="logo" />
              <C.LogoName>Pharma</C.LogoName>
          </C.Logo>
      </C.Container>
      </>
  );
}

export default Header;