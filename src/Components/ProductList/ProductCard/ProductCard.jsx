import React from 'react';
import { ProductDiv, ProductENomeColumn } from './ProductCardStyle';
import NomeItem from './NomeItem/NomeItem';

const ProductCard = ({ product, handleCart}) => {

  const ProductName = 'ProductCard';


  return (
    <>
      <ProductENomeColumn>
        <ProductDiv>
          <img src={product.imageUrl} alt="foto" />
        </ProductDiv>
        <NomeItem product={product} handleCart={handleCart}/>
      </ProductENomeColumn>



    </>
  );
};

export default ProductCard;