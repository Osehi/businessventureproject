import React from 'react';

const ImageInfo = (props) => (
    <img src={props.src} className={props.className} alt={props.alt}/>
);

export default ImageInfo;