import React from 'react'
import './HeroStyles.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
const Hero = () => {
    const {t} = useTranslation(['home'])
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1 >{t("titleh")}</h1>
                    <p className='blue'>{t("pa")}</p>
                    <Link to="/services"><div><button className='btn'>Learn More</button></div></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero