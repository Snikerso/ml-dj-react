import React from 'react';
import { ReactComponent as PuzzlesSVG } from 'assets/puzzle.svg';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion'


const PuzzlesStyle = styled(motion.custom(PuzzlesSVG))`
        width:200px;
        align-self:center;
        justify-self:center;
       .a{
           color:red;
       }


`;

const Puzzles = ({left, width,top }) => {

    return (
        <PuzzlesStyle
            style={{ width: width, transform: 'translateX(30px)' }}
            initial={{ x: left,y:top }}
            animate={{ rotate: -20 }}
            transition={{ duration: 3, loop: 0 }}
            whileHover={{ scale: 1.2 }} />
    )
}
export default Puzzles