import React from 'react';
import { ReactComponent as PuzzlesSVG } from 'assets/puzzle.svg';
import styled from 'styled-components';
import { motion } from 'framer-motion'



const PuzzlesStyle = styled(motion.custom(PuzzlesSVG))`
width:300px;
    
`;

const Puzzles = () => {

    return (
        <PuzzlesStyle
            initial={{ x:30}}
            animate={{ x:60 }}
            transition={{ duration: 3, loop: Infinity }}
            whileHover={{ scale: 1.1 }} />
    )
}
export default Puzzles