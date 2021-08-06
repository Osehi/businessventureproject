import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import ImageInfo from '../image_info/ImageInfo';
import Typography from '../typography/Typography';

const EducationTab = () => {

    const EducationContainer = styled.div`
        .arrangeItems {
            display: flex;
        }
    `

    const ImageSet = styled.div`
        .reshape {
            width: 550px;
            height: 60%;
            padding: 0px;
            margin-top:100px;
            padding-left:40px;
        }
    `
    const TextSection = styled.div`
        margin-top:0px;
        padding:100px;
        max-width: 80%;
        height: 80%;

        .educate {
            text-transform: uppercase;
        }

        .educateContent {
            font-weight: 400;
            font-size: 20px;
        }
        
    `

    const EducateButton = styled.div`
        .educationBtn {
            border-radius: 5px;
            width:200px;
            margin-bottom: 40px;
            color:white;
            background-color: black;
        }
    `

    return(
        <EducationContainer>
        <div className="arrangeItems">
            
            <div>
                <TextSection>
                <Typography className="educate">Education</Typography>
                <Typography className="educateContent">It is part of our responsibility to give back to our Economy, and<br/>
                so in this eduction section, we provide educational<br/>
                assistance to RURAL communities(schools) lacking any form of<br/>
                educational infrastructures. 
                </Typography>
                <EducateButton>
                <Button className="educationBtn">Get Started</Button>
                </EducateButton>
                </TextSection>
            </div>
            <ImageSet>
            <ImageInfo src="/images/eductionimg.jpg" className="reshape"/>
            </ImageSet>
        </div>
        </EducationContainer>
    )
};

export default EducationTab;