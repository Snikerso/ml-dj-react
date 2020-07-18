import { createGlobalStyle } from 'styled-components/macro'


const GlobalStyles = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
   */
  @font-face {
  font-family: Rubik;
  src: url(./fonts/Rubik-Bold.tff);
}

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
        margin-bottom:20px;
    }
    `;

export default GlobalStyles;
