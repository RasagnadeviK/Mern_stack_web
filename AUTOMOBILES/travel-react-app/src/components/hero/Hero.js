import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/tesla.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1>The cars we drive say a lot about us. ...</h1>
                <h2>Top CARS From Worldwide</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
