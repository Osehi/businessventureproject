import React from 'react';
import styled from 'styled-components';
import ImageInfo from '../image_info/ImageInfo';
import Typography from '../typography/Typography';

const InvestCatalogue = () => {

    const InvestContainer = styled.div`
        .set {
            display: flex;
        }
    `

    const ImageSet = styled.div`
        .design {
            width: 550px;
            height: auto;
            padding: 100px;
        }
    `
    const TextSection = styled.div`
        margin-top:100px;
        
        .paragraphText {
            font-weight: 300;
            font-size: 15px;
        }

    `

    return (
        <InvestContainer>
        <div className="set">
            <ImageSet>
            <ImageInfo src="/images/backgroundimage.jpg" className="design"/>
            </ImageSet>
            <div>
             <TextSection>   
             <Typography className="invest">Investment</Typography>
             <Typography className="paragraphText">This is where you invest your money with a Guaranty of receiving your capital with a 20% ROI 
                 + bonuses for 3 months after which your capital drops on the 4th month. No multiple registration
                 using 1 details. You can top up your investments.🤞
             </Typography>
             </TextSection>
            </div>

        </div>
        </InvestContainer>

    )
};

export default InvestCatalogue;