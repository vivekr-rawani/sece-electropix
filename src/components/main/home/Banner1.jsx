import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { items } from './bannerArray';
import '../../../styles/home.css'
function Banner(props) {

    return (
        <Carousel animation='slide'
            duration={1000}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <img
                className="banner-image"
                src={process.env.PUBLIC_URL + '/assets/' + props.item.image +'.jpg'}
                alt="Third slide"
            />
            <div className='caption'>
                <h1 className='banner-headings'>{props.item.heading}</h1>
                <p className='banner-descs'>{props.item.descrption}</p>
            </div>
        </Paper>
    )
}

export default Banner;