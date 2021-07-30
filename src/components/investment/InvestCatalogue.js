import React from 'react';
import styled from 'styled-components';
import ImageInfo from '../image_info/ImageInfo';

const InvestCatalogue = () => {

    const ImageSet = styled.div`
        .design {
            width: 550px;
            height: auto;
        }
    `

    return (

        <div>
            <ImageSet>
            <ImageInfo src="/images/backgroundimage.jpg" className="design"/>
            </ImageSet>

        </div>

    )
};

export default InvestCatalogue;