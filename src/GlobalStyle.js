import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


`;

export const Main = styled.main`
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-top: 10rem;
padding-bottom: 5rem;

`;

export const HomeRow = styled.div`
display: flex;
flex-direction: row;
`



