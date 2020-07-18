import styled from 'styled-components/macro'

export const StyledWrapperDescription = styled.div`
  min-height:80vh;
  position:relative;
  display:grid;
  margin-bottom:5vh;

`
export const StyledWrapperDrops = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  align-content:center;
  justify-items:center;
  justify-content:center;
  margin-top: 50px;
  margin-bottom: 70px;
  gap:80px;
  >div{

  }


`

export const StyledWrappedImages = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  max-height: 500px;
  justify-items: flex-start;
  align-content:flex-start;
  justify-content:flex-start;
  align-content:space-around;


  
  div{
    margin-bottom:30px;
    margin-right:30px;
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
  width: 600px;
  margin: 0 auto;
  margin-top:80px;


`
export const StyledWrappedResultImages = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-content:space-around;

  div:nth-child(1) div:nth-child(1){
    border:3px solid ${props => props.theme.thirt};
  }

  div:nth-child(1) div:nth-child(2){
 
    color: ${props => props.theme.thirt};
  }


`