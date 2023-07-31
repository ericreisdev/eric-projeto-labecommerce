import styled from "styled-components";

export const NomeItemDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.12);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.5em 0.5em -0.4em rgba(235, 87, 87, 0.5);
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 10px 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #2980b9;
    }
  }
`;
