import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImageInfo from '../image_info/ImageInfo';
import Typography from '../typography/Typography';




const Footer = () => {

    const FooterContainer = styled.div`
            border: solid red 2px;
            display: flex;
            justify-content: space-between;
            `
    const ImageResize = styled.div`
        .resize {
            max-width: 40%;
        }
    `

    const FirstItem = styled.div`
        border: solid blue 2px;
        width: 50%;
        padding-left:100px;
    `

    const DecorateText = styled.div`
        .text {
            font-weight: 200;
            font-size: 18px;
        }
    `

    const CenterItem = styled.div`
        .centerItem {
            font-weight: 300;
            font-size: 18px;
            display:flex;
            justify-content: center;
        }
    `

    const QuickLinks = styled.div`
        .quicklinks-cont{
            display: flex;
            flex-direction: column;

        }

        .quicklinks-header {
            font-weight:500;
            font-size:18px;
        }

        padding-right:100px;

    `

    return (
        <>
        <FooterContainer>
            <FirstItem>

                <ImageResize>
                    <ImageInfo src="/images/logoone.jpeg" className="resize" alt="logo"/>
                </ImageResize>

                <DecorateText>
                    <Typography className="text">
                        In a multi purpose company that generates its revenue from<br/>
                        investing in Agriculture, transportation, Consultancy and General<br/>
                        mechandise
                    </Typography>
                </DecorateText>

            </FirstItem>
            
            <QuickLinks>
                <div className='quicklinks-cont'>

                <Typography className="quicklinks-header">Quick Link</Typography>
                <Link to='/'>Home</Link>
                <Link to='/investment'>Investment</Link>
                <Link to='/consultancy'>Consultancy</Link>
                <Link to='/investment'>Poket Moni</Link>
                <Link to='/education'>Education</Link>
                <Link to='/business support'>Business Support</Link>
                </div>
            </QuickLinks>
        </FooterContainer>

        <div>
        <CenterItem>
            <Typography className="centerItem">Copyright &#169; All right reserved</Typography>
        </CenterItem>
        </div>
        </>
        
    )
};

export default Footer;