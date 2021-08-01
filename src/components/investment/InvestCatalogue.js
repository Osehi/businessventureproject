import React from 'react';
import styled from 'styled-components';
import ImageInfo from '../image_info/ImageInfo';
import Typography from '../typography/Typography';
import Button from '../button/Button';

const InvestCatalogue = () => {

    const InvestContainer = styled.div`
        .set {
            display: flex;
        }
    `

    const ImageSet = styled.div`
        .design {
            width: 550px;
            height: 80%;
            padding: 100px;
        }
    `
    const TextSection = styled.div`
        margin-top:100px;
        
        .paragraphText {
            font-weight: 400;
            font-size: 20px;
            max-width: 80%;
        }

        .list {
            list-style-type:none;
            padding-left:0px;
        }

    `
    const InvestButton = styled.div`
        .investBtn {
            border-radius: 5px;
            width:200px;
            margin-bottom: 40px;
            color:white;
            background-color: black;
            
        }
    `

    return (
        <InvestContainer>
        <div className="set">
            <ImageSet>
            <ImageInfo src="/images/coinjar.jpg" className="design"/>
            </ImageSet>
            <div>
             <TextSection>   
             <Typography className="invest">Investment</Typography>
             <Typography className="paragraphText">This is where you invest your money with a Guaranty of<br/> receiving your capital with a 20% ROI <br/> 
                 + bonuses for 3 months after which your capital drops on the<br/> 4th month. No multiple registration<br/>
                 using 1 details. You can top up your<br/> investments.✍<br/>👇👇👇👇👇👇
                 <h3>⬛ INTERESTING FEATURE</h3>  
                 <ul className="list">
                    <li>🤝No Task.</li>
                    <li>🤝You get paid within 48 hours of withdrawal.</li>
                    <li>🤝Referrals are not compulsory.</li>
                 </ul>
                 You stand a chance of making more<br/>
                 money if you choose to refer ✍                                                                                         
             </Typography>
             </TextSection>
             <InvestButton>
             <Button className="investBtn">Get Started</Button>
             </InvestButton>
            </div>

        </div>
        </InvestContainer>

    )
};

export default InvestCatalogue;