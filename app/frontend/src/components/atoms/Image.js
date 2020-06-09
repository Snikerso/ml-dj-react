import React from 'react';
import styled, { css } from 'styled-components'
import { IconAccept, IconDelete } from 'components/atoms/Icons';


const StyledWrapper = styled.div`
    display:flex;
    svg{
        width:25px;
        margin-left: 10px;
    }


`
const Img = styled.img`

        width: 140px;
        height: 200px;
        border:3px solid ${props => props.theme.secondary} ;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover;

`

function Image({ src, typeimage }) {

    return (

        <>
            {typeimage == null && (<Img src={src} />)}

            {typeimage == 'training' && (
                <>
                    <StyledWrapper>
                        <Img src={src} />
                        <IconAccept />
                        <IconDelete />
                    </StyledWrapper>

                </>

            )}

        </>
    )
}

export default Image