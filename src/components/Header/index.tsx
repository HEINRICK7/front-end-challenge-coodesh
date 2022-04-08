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
          <C.Ul>
              <C.Li>Home</C.Li>
              <C.Li>Serviços</C.Li>
              <C.Li>Sobre</C.Li>
              <C.Li>
                  <C.Button onClick={() => { history('/list_users')}}>ENTRAR</C.Button>
              </C.Li>
          </C.Ul>
      </C.Container>
      </>
  );
}

export default Header;