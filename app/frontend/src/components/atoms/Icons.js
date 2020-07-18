import React from 'react'
import { ReactComponent as IconYes1 } from 'assets/iconmonstr-check-mark-4.svg'
import { ReactComponent as IconX1 } from 'assets/iconmonstr-x-mark-4.svg'
import styled from 'styled-components/macro'

const IconYes = styled(IconYes1)`
    .a{
        fill:${props => props.theme.thirt};
    }
    .a:hover{
        opacity:0.8;
        cursor:pointer;
    }

`
const IconX = styled(IconX1)`
    .a{
     
    }
    .a:hover{
        fill:red;
        cursor:pointer;
    }

`



export const IconDelete = () => {

    return (
        <IconX />
    )

}
export const IconAccept = () => {

    return (
        <IconYes />
    )

}
