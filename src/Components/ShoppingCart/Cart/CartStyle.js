import { styled } from "styled-components";

export const CartContainer = styled.aside`
  margin-left: 25px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  height: 100vh;
  width: 50vw;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-radius: 5px;
  //transform: translateX(${({isOpen}) => (isOpen ? "0" : "100%")});

  .cart-name {
    font-weight: bold;
    font-size: 1.4em
    padding: 10px;
    color: #2C3A47;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  .close-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #eb3b5a;
  }
`;
