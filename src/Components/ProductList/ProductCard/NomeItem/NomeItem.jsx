import React from 'react'
import { NomeItemDiv } from './NomeItemStyle';

const NomeItem = ({ product, handleCart }) => {
  const addToCart = () =>{
    handleCart(product)
  }

  return (
    <NomeItemDiv>
      <p>{product.name}</p>
      <br />
      <br />
      <p>R$ {product.value.toFixed(2)}</p>
      <br />
      <br />
      <button id='buttonCarrinho' onClick={addToCart}>
        Adicionar ao Carrinho
      </button>
    </NomeItemDiv>
  );
};


export default NomeItem