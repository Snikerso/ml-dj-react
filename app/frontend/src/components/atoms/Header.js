import styled, { css } from 'styled-components/macro'


const Header = styled.div`


    color: ${props => props.theme.white_mint};
    text-align: center;
    font:  Rubik;
    font-size:85px;
    font-weight:bold;
    letter-spacing: 0px;
    opacity: 1;
    margin-bottom:30px;



    ${({ header1 }) => header1 && css`
    text-align: left;
    font: Bold  Rubik;
    font-size:52px;
    align-self:end;
    margin-bottom:0px;
    `}

`


export default Header