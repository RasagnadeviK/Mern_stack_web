import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>LUXURIES CAR</h2>
                    <p>A car (or automobile) is a wheeled motor vehicle that is used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of goods.[1][2]

The year 1886 is regarded as the birth year of the car, when German inventor Carl Benz patented his Benz Patent-Motorwagen.[3][4][5] Cars became widely available during the 20th century. One of the first cars affordable by the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company. Cars were rapidly adopted in the US, where they replaced animal-drawn carriages and carts.[6] In Europe and other parts of the world, demand for automobiles did not increase until after World War II.[6] The car is considered an essential part of the developed economy.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default Search
