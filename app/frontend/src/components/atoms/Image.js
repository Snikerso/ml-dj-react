import React from 'react';
import styled, { css } from 'styled-components/macro'
import { IconAccept, IconDelete } from 'components/atoms/Icons';

const StyledWrapper = styled.div`
    display:flex;
    svg{
        width:25px;
        margin-left: 10px;
    }
`
const Head = styled.div`
    color: ${props => props.theme.secondary};
    width: 100%;
    font: Rubik;
    font-size:16px;
    font-weight:medium;
    margin-top:5px;
    letter-spacing: 0px;
    opacity: 1;
`

const StyledWrapperPredicted = styled.div`
    display:grid ;
    grid-template-columns:1fr;

    justify-items:center;
    margin-bottom:10px;
    svg{
        width:25px;
        margin-left: 10px;
    }

`
const Img = styled.div`

        width: 140px;
        height: 200px;
        border:3px solid ${props => props.theme.secondary} ;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: contain;
        align-self:flex-start;

`

function Image({ srce, typeimage, beta }) {

    return (

        <>
            {typeimage == null && (<Img style={{ backgroundImage: `url(${srce})` }} />)}

            {typeimage == 'training' && (
                <>
                    <StyledWrapper>
                        <Img style={{ backgroundImage: `url(${srce})` }} />
                    </StyledWrapper>

                </>
            )}
            {typeimage == 'predict' && (
                <>
                    <StyledWrapperPredicted className='predict'>
                        <Img style={{ backgroundImage: `url(${srce})` }} />
                        <Head>b = {beta}</Head>
                    </StyledWrapperPredicted>

                </>

            )}

        </>
    )
}

export default Image