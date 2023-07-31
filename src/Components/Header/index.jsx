import React from "react";
import { Cart, HeaderStyle, Logo } from "./style";
import logoImage from "../../assets/img/Logo/logo.jpg";
import cartImage from "../../assets/img/carrinho/carrinho-de-compras.png";

const Header = ({ cartOpen, setCartOpen }) => {
  const handleCartOpen = () => {
    setCartOpen(true);
  };
  return (
    <HeaderStyle>
      <div className="logo">
        <Logo src={logoImage} alt="Logo Galactic Pop Toys" />
      </div>
      <div className="headerTitle">
        <h1>GALACTIC POP TOYS</h1>
        <p>Sua parada para todas as naves espaciais que você procura!</p>
      </div>
      <div className="cart" onClick={handleCartOpen}>
        <Cart src={cartImage} alt="Ícone de carrinho de compras" />
      </div>
    </HeaderStyle>
  );
};

export default Header;
