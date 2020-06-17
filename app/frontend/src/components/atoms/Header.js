import styled, { css } from 'styled-components'


const Header = styled.div`


    color: ${props => props.theme.white_mint};
    text-align: center;
    font: Bold  Rubik;
    font-size:80px;
    letter-spacing: 0px;
    opacity: 1;



    ${({ header1 }) => header1 && css`
    text-align: left;
    font: Bold  Rubik;
    font-size:40px;
    align-self:end;
    
    `}

`


export default Header