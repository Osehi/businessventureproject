import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import ImageInfo from '../image_info/ImageInfo';
import Typography from '../typography/Typography';

import {TextSelection,SupportButton, ImagePosition, SetContent} from './style'

const BusinessSupport = () => (
        <SetContent>
        <div className="setContent">
            <ImagePosition>
            <ImageInfo src="/images/businesssupportimg.jpg" className="position"/>
            </ImagePosition>
            <div>
                <TextSelection>
                <Typography className="support">Business Support</Typography>
                <Typography className="supportContent">
                    Are you a business person, do you need support, hurry<br/>
                    now and get the needed FINANCIAL boost to your business.<br/><br/>
                    Contact us at<br/>
                    businesventur@gmail.com<br/>
                    None refundable registration fee is 2000<br/>
                    TNC applies.
                </Typography>
                </TextSelection>
                <SupportButton>
                <Button className="supportBtn">Get Started</Button>
                </SupportButton>
            </div>
            
        </div>
        </SetContent>
    )

export default BusinessSupport;