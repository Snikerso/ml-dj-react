import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import { useDropzone } from 'react-dropzone';
import IconImage from 'components/atoms/DropImageArea'


const Paragraph = styled.p`
    font: Bold 41px/48px Rubik;
    color: hsla(169, 100%, 97%, 1);

`
const mystyle = {
    width: '523px',
    height: '324px',
    border: ' 5px solid hsla(48, 92%, 66%, 1)',
    borderRadius: '45px',
    opacity: ' 1',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    outline: 'none',

};
function DropTarget(props) {

    const { title, files, setFiles } = props;



    const [isLoading, setIsLoading] = useState(false);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            loadImage(acceptedFiles)
            setIsLoading(true)
        }
    });


    const loadImage = (acceptedFiles) => {
        setTimeout(() => {
            setFiles(acceptedFiles.slice(0, 6).map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)

            })));
            setIsLoading(false)
        }, 1000)
    }


    const thumbs = files.map(file => (
        <div key={file.name}>
            <div >
                <img
                    src={file.preview}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);


    return (

        <div style={mystyle} {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <Paragraph>{title}</Paragraph>
            <IconImage />
        </div>

    );
}

export default DropTarget