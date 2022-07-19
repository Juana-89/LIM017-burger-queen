import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.module.css';

const image1 = require('../../img/burger1.jpg');
const image2 = require('../../img/burger2.jpg');
const image3 = require('../../img/burger3.jpg');

const Carrousel = () => {
    return(
    <div id={styles.carouselImages}>
    <div id={styles.carouselBurger} className='carousel carousel-dark slide' data-bs-ride='carousel'>
    <div className='carousel-indicators'>
    <button type='button' data-bs-target='#carouselBurger' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
    <button type='button' data-bs-target='#carouselBurger' data-bs-slide-to='1' aria-label='Slide 2'></button>
    <button type='button' data-bs-target='#carouselBurger' data-bs-slide-to='2' aria-label='Slide 3'></button>
    </div>
    <div className='carousel-inner'>
    <div className='carousel-item active' data-bs-interval='1000'><img src={image1} id='img1' className='d-block' alt='Hamburguesa clásica' /></div>
    <div className='carousel-item' data-bs-interval='2000'><img src={image2} id='img2' className='d-block' alt='Hamburguesa doble' /></div>
    <div className='carousel-item' data-bs-interval='3000'><img src={image3} id='img3' className='d-block' alt='Hamburguesa triple' /></div>
    </div>
    <div className='btns-carousel'>
    <button className='carousel-control-prev' type='button' data-bs-target='#carouselBurger' data-bs-slide='prev'>
    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
    <span className='visually-hidden'>Previous</span>
    </button>
    <button className='carousel-control-next' type='button' data-bs-target='#carouselBurger' data-bs-slide='next'>
    <span className='carousel-control-next-icon' aria-hidden='true'></span>
    <span className='visually-hidden'>Next</span>
    </button>
    </div>
    </div>
    </div>
    )
};

export default Carrousel