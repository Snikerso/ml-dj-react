import styled ,{css} from 'styled-components'


const Paragraph = styled.p`


    color: ${props => props.theme.white_mint};
    font: Bold  Rubik;
    font-size:16;
    letter-spacing: 0px;
    opacity: 1;


    ${({ show }) => show && css`

        text-decoration: underline overline;
        align-self: end;
        
    `}

`



export default Paragraph