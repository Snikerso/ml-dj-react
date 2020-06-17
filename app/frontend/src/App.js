import React, { useState, useRef } from 'react';
import axios from 'axios'
import styled,{css} from 'styled-components'
import MainTemplate from './templates/MainTemplate'
import DropTarget from 'components/molecules/DropTarget';
import Button from 'components/atoms/Button';
import Header from 'components/atoms/Header';
import Paragraph from 'components/atoms/Paragraph';
import Image from 'components/atoms/Image';
import Puzzles from 'components/atoms/Puzzles';
import { StyledWrappedResultImages, StyledWrapperDescription, StyledWrapperDrops, StyledWrappedResult, StyledWrappedImages, StyledWrapperPuzzles } from 'components/atoms/Wrappers';


const StyledWrapper = styled.div`
display:flex;
flex-direction:column;
`

const Head = styled.div`
    color: ${props => props.theme.secondary};
    text-align: left;
    font: Bold  Rubik;
    font-size:20px;
    letter-spacing: 0px;
    opacity: 1;
    margin-top:30px;

  
    ${({ similarity }) => similarity && css`
         
      color:${props => props.theme.thirt};
        
    `}

`
const StyledButton = styled(Button)`
  align-self:center;


`
function App() {

  const [filesTarget, setFilesTarget] = useState([]);
  const [filesTraining, setFilesTraining] = useState([]);
  const [showAll, setShowAll] = useState(3);
  const [picurePredicted, setPicturePredicted] = useState('');
  const [beta, setBeta] = useState([]);
  const [pictures, setPictures] = useState([]);

  const scrollRef = useRef(null)

  const thumbsTarget = filesTarget.map(file => (

    <Image key={file.name}
      typeimage={null}
      srce={file.preview}
    />

  ));

  const thumbsTraining = filesTraining.slice(0, showAll).map(file => (
    <Image key={file.name}
      typeimage={'training'}
      srce={file.preview}

    />

  ));

  const scrollTo = () => {
    window.scrollTo({
      behavior: "smooth",
      top: scrollRef.current.offsetTop
    })
  }

  const handleSend = () => {

    let form_data = new FormData();
    form_data.append('title', "targetimage");
    form_data.append('picture_target', filesTarget[0], filesTarget[0].name);
    form_data.append('picture1', filesTraining[0], filesTraining[0].name);
    form_data.append('picture2', filesTraining[1], filesTraining[1].name);
    form_data.append('picture3', filesTraining[2], filesTraining[2].name);
    form_data.append('picture4', filesTraining[3], filesTraining[3].name);
    form_data.append('picture5', filesTraining[4], filesTraining[4].name);
    form_data.append('picture6', filesTraining[5], filesTraining[5].name);
    let url = 'http://127.0.0.1:8000/api/image/';

    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
      // body: JSON.stringify({title:'targetowe', picture_target: ""})
    })
      .then(res => {
        setPicturePredicted(res.data.picture_predicted);

        let betas = res.data.beta.trim().split(' ');

        setBeta(betas);
        console.log(betas);

        let array = filesTraining.map((item, value) => { return { ...item, beta: betas[value] } })
        setPictures(array)

      })
      .catch(err => console.log(err))
  };




  return (
    <>
      <MainTemplate>
        <StyledWrapper>
          <StyledWrapperDescription>
            <Header>Guess who?</Header>

            <Header header1>How it works</Header>

            <StyledWrapperPuzzles>
              <Paragraph style={{ width: '50%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
              <Puzzles width={'180px'} />
            </StyledWrapperPuzzles>


            <Button started onClick={scrollTo}>Lets get started</Button>
          </StyledWrapperDescription>

          <StyledWrapperDrops ref={scrollRef} name="test1">
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


     
            {thumbsTarget}

          {filesTraining.length > 0 && <Head>Training Images</Head>}

          <StyledWrappedImages>
            {thumbsTraining}
          </StyledWrappedImages>
          {(filesTraining.length >= 4 && filesTraining.length > showAll) && <Paragraph show onClick={() => setShowAll(showAll + 4)}>show more</Paragraph>}
          {showAll > 4 && <Paragraph show onClick={() => setShowAll(4)}>show less</Paragraph>}


          <StyledButton onClick={handleSend}>Predict</StyledButton>


          {picurePredicted && (
            <>
              <StyledWrappedResult>
                <div>
                  <Head>Target</Head>
                  <Image srce={filesTarget[0].preview} />
                </div>
                <Puzzles width={'150px'} />
                <div>
                  <Head>Predicted</Head>
                  <Image srce={picurePredicted} />
                </div>

              </StyledWrappedResult>


              <Head similarity>Similarity scale</Head>
              <StyledWrappedResultImages >
                {pictures
                  .sort(function (a, b) {
                    return b.beta - a.beta
                  })
                  .map(item => {

                    return (
                      <>

                        <Image
                          typeimage={'predict'}
                          srce={item.preview}
                          beta={item.beta} />

                      </>

                    )
                  })}
              </StyledWrappedResultImages>

            </>
          )}



        </StyledWrapper>
      </MainTemplate>
    </>

  );
}

export default App;
