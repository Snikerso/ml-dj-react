import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

function DropTarget(props) {

    const [files, setFiles] = useState([]);
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
            setFiles(acceptedFiles.map(file => Object.assign(file, {
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
        <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <h4>Target image</h4>
                <ul>{thumbs}</ul>
            </aside>

            {isLoading && <div>...loading</div>}
        </section>
    );
}

export default DropTarget