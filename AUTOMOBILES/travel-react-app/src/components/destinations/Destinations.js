import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/1.JPG'
import BoraBora2 from '../../assets/3.JPG'
import Maldives from '../../assets/admin.jpg'
import Maldives2 from '../../assets/5.JPG'
import KeyWest from '../../assets/bmw.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive CARS</h1>
                <p>AROUND THE WORLD</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
