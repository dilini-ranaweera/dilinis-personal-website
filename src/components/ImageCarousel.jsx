import React from 'react';
import Slider from 'react-slick';

const ImageCarousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider{...settings}>
            {props.ImageArray.map((image) => (
                <div className="carousel-single-image">
                    <img src={image.src} alt={image.alt}></img>
                </div>
            ))}
        </Slider>
    )


}

export default ImageCarousel;