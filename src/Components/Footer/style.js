import React from "react";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #0a192f;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  font-family: "Bangers", cursive;
  color:#f57c00;
 `;

export const FooterText = styled.p`
  font-size: 1.2em;
  margin: 0;
`;

export const FooterLink = styled.a`
  color: #f57c00;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f57c00;
  }
`;
