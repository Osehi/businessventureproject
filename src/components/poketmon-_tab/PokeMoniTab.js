import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import ImageInfo from '../image_info/ImageInfo';
import Typography from '../typography/Typography';


const PoketMoniTab = () => {

    const ImageSet = styled.div`
        .dress {
            width: 550px;
            height: 80%;
            padding: 100px;
        }
    `
    const Arrange = styled.div`
        .arrange {
            display: flex;
        }
    `

    const TextSelection = styled.div`
        margin-top: 100px;

        .moneySolution {
            text-transform: uppercase;
        }

        .moneySolutionContent {
            font-weight: 400;
            font-size: 20px;
            max-width: 80%;
        }

    `
    const PokeButton = styled.div`
        .poketBtn {
            border-radius: 5px;
            width:200px;
            margin-bottom: 40px;
            color:white;
            background-color: black;
        }
    `

    return(
        <Arrange>
        <div className="arrange">
            <ImageSet>
            <ImageInfo src="/images/poketMoniimg.jpg" className="dress"/>
            </ImageSet>
            <div>
                <TextSelection>
                <Typography className="moneySolution">Poke Moni</Typography>
                <Typography className="moneySolutionContent">Yes, Poke Moni is not only for students, its for everyone<br/>
                To access this fund of up to 500,000 naira, these<br/>
                funds are non refundable to the company.<br/>
                You must contact us as soon as possible<br/>
                @ businessventur@gmail.com<br/><br/>
                Stating your need and amount needed;<br/> 
                if successful Business Ventures will contact you<br/>
                within 2 weeks of application.<br/>
                A non refundable registration fee is 1,000 naira only 🤝<br/>
                Multiply Registration is allowed.
                </Typography>
                </TextSelection>
                <PokeButton>
                <Button className="poketBtn">Get Started</Button>
                </PokeButton>
            </div>
        </div>
        </Arrange>
    )
};

export default PoketMoniTab;