import styled from 'styled-components';

export const DivNomeEProduct = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 0;
  flex-wrap: wrap;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em rgba(235, 87, 87, 0.5);
  }
`;

export const ParagrafoEProduct = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
`;

export const QuantidadeOrdenacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.12);
`;
