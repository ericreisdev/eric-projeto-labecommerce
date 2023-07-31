import styled from "styled-components";

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  padding: 20px;
  height: auto;
  background-color: #ffffff;

  h2 {
    font-size: 1.2em;
    margin-bottom: 1em;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-weight: 500;
      color: #333;
    }

    input {
      padding: 0.5em;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1em;

      &:focus {
        border-color: #007BFF;
        outline: none;
        box-shadow: 0px 0px 5px rgba(0,123,255,0.25);
      }
    }
  }
`;
