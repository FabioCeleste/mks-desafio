import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue-800: #0F52BA;

        --black: #000;        
        --black-700: #373737;
        --black-600: #2C2C2C;
        --black-200: #BFBFBF;
        
        --white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    } 

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
    -webkit-font-smoothing: antialiased; 
    }

    button {
        cursor: pointer;
    }
`;
