import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/au1.jpg'
import BoraBora2 from '../../assets/bmw.jpg'
import Maldives from '../../assets/kia.png'
import Maldives2 from '../../assets/honda.jpg'
import Maldives3 from '../../assets/rap.png'
import KeyWest from '../../assets/4.JPG'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Audi' />
                <SelectsImg bgImg={BoraBora2} text='BMW' />
                <SelectsImg bgImg={Maldives} text='Kia' />
                <SelectsImg bgImg={Maldives2} text='Honda' />
                <SelectsImg bgImg={Maldives3} text='Ford' />
                <SelectsImg bgImg={KeyWest} text='Nexan' />
            </div>

        </div>
    )
}

export default Selects
