import React from 'react';
import styled from 'styled-components';
import { FooterContainer, FooterLink, FooterText } from './style';



const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Galactic Pop Toys. Todos os direitos reservados.
        Desenvolvido por <FooterLink href="https://seusite.com" target="_blank" rel="noopener noreferrer">Eric Reis</FooterLink>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
