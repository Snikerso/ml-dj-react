import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
  


    *,*::before,*::after{
        box-sizing:border-box;
        
    }
    html {
        font-size: 10px; 
        
    }

    body{
        font-family: 'Rubik', sans-serif;
        font-size:1.6rem;
        
        background-color:hsla(212, 96%, 10%, 1);
        margin:7%;
        margin-top:3%;
    }
    `;

export default GlobalStyles;
