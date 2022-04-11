import React from 'react';
import * as C from './styled';
import Logo from '../../assets/logoFooter.svg'

const Footer: React.FC = () => {
  return (
  <>
    <C.Container>
    <C.Logo>
      <img src={Logo} alt="logo" />
      <C.LogoName>Pharma</C.LogoName>
    </C.Logo>
    <ul>
        <li>About Us</li>
        <li>Sustainability</li>
        <li>Terms of Service</li>
        <li>Privacy</li>
      </ul>
    </C.Container>
  </>
);
}

export default Footer;