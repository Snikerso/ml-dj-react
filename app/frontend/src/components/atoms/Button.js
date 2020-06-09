import styled,{css} from 'styled-components'


const Button = styled.button`
    background-color:${props => props.theme.thirt};
    width:213px;
    height:62px;
    color: ${props => props.theme.white_mint};
    box-shadow: 2px 5px 5px hsla(0, 0%, 0%, 0.16);
    border-radius: 26px;
    opacity: 1;
    outline: none;
    border:none;
    text-align: center;
    font: Bold 25px/29px Rubik;
    letter-spacing: 0px;
    color: hsla(169, 100%, 97%, 1);
    opacity: 1;

    :hover{
        opacity:0.8;
    }


    ${({ started }) => started && css`
        font-family: 'Rubik', sans-serif;
        width: 285px;
        height: 74px;
        
    `}

`


export default Button