import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }

    body{
        background: rgb(44, 44, 44);
        font-family: 'Roboto', sans-serif;
    }

    hr{
        background-color: rgba(229, 229,229,0.2);
        border: 1px solid rgba(229, 229,229,0.2);
    }

`;