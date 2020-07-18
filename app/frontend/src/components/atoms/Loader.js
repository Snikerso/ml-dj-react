import React from 'react';
import { ReactComponent as Icon } from 'assets/iconmonstr-synchronization-7.svg';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

const StyledWrapper =styled.div`
    background-color:#011936;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    margin:0;
    width:100vw;
    height:100vh;


`
const IconSpinner = styled(motion.custom(Icon))`
    margin:auto;


`

 const Loader = () => {

    return (
        <StyledWrapper>
            <IconSpinner
            animate={{ rotate: -360 }} 
            transition={{ duration: 3, loop: Infinity }}/>
        </StyledWrapper>
    )

}
export default Loader