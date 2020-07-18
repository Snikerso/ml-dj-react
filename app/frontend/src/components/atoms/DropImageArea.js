import React from 'react'
import { ReactComponent as IconImage } from 'assets/iconimage.svg'
import styled from 'styled-components';

const IconDropImage = styled(IconImage)`
    .a{
        fill:${props => props.theme.white_mint};
    }

`
const DropImage = () => {

    return (

        <IconDropImage></IconDropImage>

    )

}

export default DropImage