import styled from "styled-components";

export const ProductDiv = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  margin-top: 0;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.12);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5em 0.5em -0.4em rgba(235, 87, 87, 0.5);
  }

  img{
    width: 150px;
    height: 250px;
    border-radius: 10px;
  }
`;

export const ProductENomeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
`;
