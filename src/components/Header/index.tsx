import React from 'react';

import * as C from './styled';
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => {

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