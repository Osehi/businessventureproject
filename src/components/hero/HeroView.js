import React from 'react';
import Button from '../button/Button';
import Typography from '../typography/Typography';
import styled from 'styled-components';

const FirstHeader = styled.div`
    .headOne {
        color: white;
        padding-top:50px;
        padding-left:100px;
        
    }
`
const Paragraph = styled.div`
    max-width:500px;
    .text {
        color: white;
        padding-left: 100px;
        padding-top: 0px;
        font-weight: 400;
        font-size: 25px

    }
`

const Inquire = styled.div`
    .ask {
        margin-left:100px;
        border-radius: 5px;
        width:200px;
        margin-bottom: 40px;
        color: green;
        font-weight: 500;
        height: 30px;
        font-size:16px;
    }
`

const Hero =(props)=> {
    // use image as a background
    
    return <div style={{
        backgroundImage: "url(images/backgroundimage.jpg)",
        
        
    }} >
        <FirstHeader>
        <Typography className="headOne">Business Ventures</Typography>
        </FirstHeader>
        <Paragraph>
        <Typography className="text" >Is a multiple purpose company that generate its revenue from investing in Agriculture, Transportation, Consultation and General Merchandise.</Typography>
        </Paragraph>
        <Inquire>
        <Button className="ask">Get Started</Button>
        </Inquire>
    </div>

};


export default Hero;