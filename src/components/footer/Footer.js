import React from 'react';
import { Link } from 'react-router-dom';
import ImageInfo from '../image_info/ImageInfo';
import Typography from '../typography/Typography';


const Footer = () => {
    return (
        <div>
            <div className="right">
                <ImageInfo src="/images/logoone.jpeg" className="" alt="logo"/>
                <Typography>
                    In a multi purpose company that generates its revenue from<br/>
                    investing in Agriculture, transportation, Consultancy and General<br/>
                    mechandise
                </Typography>
            </div>
            <Typography>Copyright &#169</Typography>
            <div>
                <Typography>Quick Link</Typography>
                <Link to='/'>Home</Link>
                <Link to='/investment'>Investment</Link>
                <Link to='/consultancy'>Consultancy</Link>
                <Link to='/investment'>Poket Moni</Link>
                <Link to='/education'>Education</Link>
                <Link to='/business support'>Business Support</Link>
            </div>
        </div>
    )
};

export default Footer;