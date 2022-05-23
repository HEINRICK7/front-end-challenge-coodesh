import {createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        background-image:#FFFFFF;
        ::-webkit-scrollbar{
      width: 8px;
    }

    ::-webkit-scrollbar-thumb{
      background: #0077C0;  /* fallback for old browsers */
      border-radius: 10px;
    }
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        
    }
`;
