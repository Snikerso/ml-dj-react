import styled ,{css} from 'styled-components/macro'


const Paragraph = styled.p`


    color: ${props => props.theme.white_mint};
    font:Regular Rubik;
    font-size:20px;
    line-height: 1.3;
    opacity: 1;

    @media (min-width: 400px) {
        width:50%;
  }


    ${({ show }) => show && css`

        text-decoration: underline ;
       
        margin:20px auto ; 
        :hover{
            color:${props => props.theme.second}
        }

        
    `}

`



export default Paragraph