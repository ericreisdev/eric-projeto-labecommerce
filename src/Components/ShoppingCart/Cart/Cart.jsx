import React from 'react'
import Items from '../Items/Items'
import { CartContainer } from './CartStyle';

const Cart = ({  amount,
  setAmount,
  cart,
  setCart,
  cartOpen,
  setCartOpen,
}) => {

    return (
    <>
    {cartOpen ? (
    <CartContainer>
    
    <p className='cart-name'>Carrinho</p>
    
    <Items cart={cart}
    setCart={setCart}
    />
    <br />
    <br />
    <br />
    <button className='close-cart' onClick={() => setCartOpen(false)}>Fechar carrinho</button>
    </CartContainer>
    ) : null}
    
    
    </>
  )
}

export default Cart