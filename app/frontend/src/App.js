import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import MainTemplate from './templates/MainTemplate'
import DropTarget from 'components/molecules/DropTarget';
import Button from 'components/atoms/Button';
import Header from 'components/atoms/Header';
import Paragraph from 'components/atoms/Paragraph';
import Image from 'components/atoms/Image';
import Puzzles from 'components/atoms/Puzzles';
import { IconAccept, IconDelete } from 'components/atoms/Icons';


const StyledWrapperDescription = styled.div`
  min-height:90vh;
  position:relative;
  display:grid;
  margin-bottom:10vh;

`
const StyledWrapperDrops = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-content:center;
  justify-items:center;
  >div{
    margin:20px;
  }


`
const Head = styled.div`
    color: ${props => props.theme.secondary};
    text-align: left;
    font: Bold  Rubik;
    font-size:20px;
    letter-spacing: 0px;
    opacity: 1;
    margin-top:30px;

`
const StyledWrapperImages = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-items:center;
  
  img{
    margin:20px;
  }

`
const StyledWrapperPuzzles = styled.div`
  display:flex; 
  flex-wrap:wrap;


`
const StyledWrappedResult = styled.div`



`

function App() {

  const [filesTarget, setFilesTarget] = useState([]);
  const [filesTraining, setFilesTraining] = useState([]);
  const [showAll, setShowAll] = useState(3);


  const thumbsTarget = filesTarget.map(file => (
    <div key={file.name}>
      <div >
        <Image
          typeimage={null}
          src={file.preview}

        />
      </div>
    </div>
  ));

  const thumbsTraining = filesTraining.slice(0, showAll).map(file => (
    <div key={file.name}>
      <div>
        <Image
          typeimage={'training'}
          src={file.preview}

        />
      </div>
    </div>
  ));

  const handleSend = () => {
    fetch(`http://127.0.0.1:8000/api/image/cos/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ title: magName })
    }).then(res =>
      console.log(res.json())

    )
  }

  return (
    <>
      <MainTemplate>
        <StyledWrapperDescription>
          <Header>Guess who?</Header>
          <button onClick={handleSend}></button>

          <Header header1>How it works</Header>

          <StyledWrapperPuzzles>
            <Paragraph style={{ width: '50%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
            <Puzzles />
          </StyledWrapperPuzzles>


          <Button started>Lets get started</Button>
        </StyledWrapperDescription>

        <StyledWrapperDrops>
          <DropTarget
            title={'Drop target photo'}
            files={filesTarget}
            setFiles={setFilesTarget} />

          <DropTarget
            title={'Drop training photo'}
            files={filesTraining}
            setFiles={setFilesTraining} />
        </StyledWrapperDrops>


        {filesTarget.length > 0 && <Head>Target Photo</Head>}


        <StyledWrapperImages>
          {thumbsTarget}
        </StyledWrapperImages>

        {filesTraining.length > 0 && <Head>Training Images</Head>}

        <StyledWrapperImages>
          {thumbsTraining}

          {(filesTraining.length >= 4 && filesTraining.length > showAll) && <button onClick={() => setShowAll(showAll + 4)}>show more</button>}
          {showAll > 4 && <button onClick={() => setShowAll(4)}>show less</button>}
        </StyledWrapperImages>


        <StyledWrappedResult></StyledWrappedResult>


      </MainTemplate>
    </>

  );
}

export default App;
