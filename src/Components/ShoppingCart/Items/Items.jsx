import React from "react";
import { ItemDiv, ValorTotal } from "./ItemsStyle";

const Items = ({ cart, setCart }) => {
  const removeItem = (item) => {
    if (item.quantity === 1) {
      const updatedCart = cart.filter((product) => product.id !== item.id);
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCart(updatedCart)
    }
  };

  const totalValue = cart.reduce(
    (total, item) => total + item.value * item.quantity,
    0
  );

  const renderAmount = cart.map((item) => (
    <ItemDiv key={item.id}>
      <p>x{item.quantity}</p>
      <p>{item.name}</p>
      <button onClick={() => removeItem(item)}>remover</button>
    </ItemDiv>
  ));

  return (
    <>
      {renderAmount}
      <ValorTotal>Valor Total: R$ {totalValue.toFixed(2)}</ValorTotal>
    </>
  );
};

export default Items;
