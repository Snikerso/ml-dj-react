import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled, { css } from 'styled-components/macro';
import MainTemplate from './templates/MainTemplate';
import DropTarget from 'components/molecules/DropTarget';
import Button from 'components/atoms/Button';
import Header from 'components/atoms/Header';
import Paragraph from 'components/atoms/Paragraph';
import Image from 'components/atoms/Image';
import Puzzles from 'components/atoms/Puzzles';
import Loader from 'components/atoms/Loader';
import { StyledWrappedResultImages, StyledWrapperDescription, StyledWrapperDrops, StyledWrappedResult, StyledWrappedImages, StyledWrapperPuzzles } from 'components/atoms/Wrappers';


const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
`
const ParagraphMore = styled(Paragraph)`
            width: 80px;
    text-align: left;
    align-self: flex-end;
    justify-self: self-start;
    margin:0;
    margin-bottom:60px;
      @media (min-width: 400px) {
        width: 80px;
        text-align: center;
  }
`

const Head = styled.div`

    color: ${props => props.theme.secondary};
    text-align: left;
    font: Bold  Rubik;
    font-weight:bold;
    font-size:32px;
    letter-spacing: 0px;
    opacity: 1;
    margin-top: 30px;
    margin-bottom: 34px;

    ${({ similarity }) => similarity && css`
      margin-left: 20px;
      margin-top:155px;
      color:${props => props.theme.thirt};
        
    `}
    ${({ white }) => white && css`
         
      color:${props => props.theme.white_mint};
      text-align: center;
        
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
  const [showLoading, setShowLoading] = useState(false)

  const scrollRef = useRef(null)
  const scrollRefLoader = useRef(null)

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
  const scrollAfterLoader = () => {
    window.scrollTo({
      behavior: "smooth",
      top: scrollRefLoader.current.offsetTop
    })
  }

  const handleSend = () => {
    setShowLoading(true)
    let form_data = new FormData();
    form_data.append('title', "targetimage");
    form_data.append('picture_target', filesTarget[0], filesTarget[0].name);
    form_data.append('picture1', filesTraining[0], filesTraining[0].name);
    form_data.append('picture2', filesTraining[1], filesTraining[1].name);
    form_data.append('picture3', filesTraining[2], filesTraining[2].name);
    form_data.append('picture4', filesTraining[3], filesTraining[3].name);
    form_data.append('picture5', filesTraining[4], filesTraining[4].name);
    form_data.append('picture6', filesTraining[5], filesTraining[5].name);
    let url = `${process.env.REACT_APP_API_URL}/api/image/`;

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

        setShowLoading(false)
        scrollAfterLoader()

      })
      .catch(err => {
        console.log(err)
        setShowLoading(false)
      }
      )
  };





  return (
    <>
      <MainTemplate>
        <StyledWrapper>
          <StyledWrapperDescription>
            <Header>Guess who?</Header>

            <Header header1>How it works</Header>

            <StyledWrapperPuzzles>
              <Paragraph >
                Hello! In this app you can create a photo which is composed from 6 other photos (training images) and the create photo is most suited to 1 photo (target image). Will be the best if your pictures of the characters, will be from your favorite series or movie and are of equal dimensions, because the program cut them to equal dimensions and if the character's face is on the side of the picture, it may not catch it.  </Paragraph>
              <Puzzles left={130} width={'250px'} top ={-60} />
            </StyledWrapperPuzzles>
            <Button started onClick={scrollTo}>Lets get started</Button>



          </StyledWrapperDescription>

          <StyledWrapperDrops ref={scrollRef} name="test1">
            <DropTarget
              title1={'Drop'}
              title2={'target'}
              title3={'photo'}
              files={filesTarget}
              setFiles={setFilesTarget}
            />


            <DropTarget
              title1={'Drop '}
              title2={'training'}
              title3={'photo'}

              files={filesTraining}
              setFiles={setFilesTraining} />
          </StyledWrapperDrops>


          {filesTarget.length > 0 && <Head>Target Photo</Head>}

          {thumbsTarget}

          {filesTraining.length > 0 && <Head>Training photos</Head>}

          <StyledWrappedImages>
            {thumbsTraining}
            {(filesTraining.length >= 4 && filesTraining.length > showAll) && <ParagraphMore show onClick={() => setShowAll(showAll + 4)}>Show all</ParagraphMore>}
            {showAll > 4 && <ParagraphMore show onClick={() => setShowAll(4)}>Fold</ParagraphMore>}

          </StyledWrappedImages>


          <StyledButton onClick={handleSend}>Predict</StyledButton>
          {showLoading && <Loader>dsadsa</Loader>}


          {picurePredicted && (
            <>
              <StyledWrappedResult ref={scrollRefLoader}>
                <div>
                  <Head white>Target</Head>
                  <Image srce={filesTarget[0].preview} />
                </div>
                <Puzzles width={'150px'} top={30 }/>
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
