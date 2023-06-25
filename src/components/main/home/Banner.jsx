import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { items } from './bannerArray';
import '../../../styles/home.css'

function Banner() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}
           interval = {2500}
        >
            {
                items.map((item) => {

                    return (
                        <Carousel.Item>
                            <img 
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/assets/' + item.image + '.jpg'}
                            alt = 'banner'
                             />

                            <Carousel.Caption>
                                <h1 className='banner-headings'>{item.heading}</h1>
                                <p className='banner-descs'>{item.descrption}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )

                })
            }

        </Carousel>
    );
}

console.log()

export default Banner;