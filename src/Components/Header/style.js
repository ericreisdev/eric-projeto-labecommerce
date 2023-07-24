import styled, { keyframes } from 'styled-components';

const shimmerAnimation = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #0a192f, #17355f);
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;f

  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(45deg, #ffca28, #ff8c00);
    animation: ${shimmerAnimation} 2s linear infinite;
  }

  .headerTitle {
    text-align: center;

    h1 {
      font-size: 2.5em;
      margin-bottom: 5px;
      color: #f57c00;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    p {
      font-size: 1.5em;
      color: #f9a825;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .cart {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #f57c00, #ffca28);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    animation: ${shimmerAnimation} 2s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.6)
    );
    opacity: 0.5;
    z-index: -1;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const Cart = styled.img`
  width: 30px;
  height: 30px;
`;
