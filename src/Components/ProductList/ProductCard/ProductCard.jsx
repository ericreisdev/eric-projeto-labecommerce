import React from "react";
import { ProductDiv, ProductENomeColumn } from "./ProductCardStyle";
import NomeItem from "./NomeItem/NomeItem";

const ProductCard = ({ product, handleCart, cartOpen, setCartOpen }) => {
  const ProductName = "ProductCard";

  return (
    <>
      <ProductENomeColumn>
        <ProductDiv>
          <img src={product.imageUrl} alt="foto" />
        </ProductDiv>
        <NomeItem
          product={product}
          handleCart={handleCart}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      </ProductENomeColumn>
    </>
  );
};

export default ProductCard;
