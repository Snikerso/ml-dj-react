import styled from 'styled-components'

export const StyledWrapperDescription = styled.div`
  min-height:90vh;
  position:relative;
  display:grid;
  margin-bottom:10vh;

`
export const StyledWrapperDrops = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-content:center;
  justify-items:center;
  justify-content:center;
  >div{
    margin:20px;
    flex-basis:400px;
  }


`

export const StyledWrappedImages = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-items: center;
  align-content:center;
  justify-content:space-around;
  align-content:space-around;


  
  .div{
    margin-bottom:10px;
    margin-right:10px;
  }

`
export const StyledWrapperPuzzles = styled.div`
  display:flex; 
  flex-wrap:wrap;


`
export const StyledWrappedResult = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-items: center;
  justify-content:space-around;
  align-content:space-around;
  margin-top:20px;


`
export const StyledWrappedResultImages = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-content:space-around;

  div:nth-child(1) div:nth-child(1){
    border:3px solid green;
  }

`