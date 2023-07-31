import { styled } from "styled-components";

export const CartContainer = styled.aside`
  margin-left: 25px;
  background-color: #ffffff;
  height: 100vh;
  width: 50vw;
  transition: transform 0.3s ease-in-out;
  //transform: translateX(${({isOpen}) => (isOpen ? "0" : "100%")});
  

  .cart-name {
    font-weight: bold;
    font-size: 1.4em
    padding: 10px;
    color: #333;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  .close-cart {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


// export const CartContainer = styled.aside`
//   background-color: #ffffff;
//   border-radius: 5px;
//   box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
//   height: 100vh;
//   width: 300px; // você pode ajustar para o tamanho que preferir
//   position: fixed;
//   top: 0;
//   right: 0;
//   transition: transform 0.3s ease-in-out;
//   transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});

//   .cart-name {
//     font-size: 1.4em;
//     font-weight: bold;
//     color: #333;
//     padding: 10px;
//     text-align: center;
//     border-bottom: 1px solid #eee;
//   }
// `;
