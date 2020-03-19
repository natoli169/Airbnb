import React from "react";
import {Container} from "./style";
import experiences from "../../../assets/experiences.png";

export const PlacesCard = () => {
    return(
        <Container>
            <div>
                <h2 className='title'>Places to stay around the world</h2>
            </div>
            <div className='cards'>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Entire apartment</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p><span className='price-description'>$80</span><span className='description-title'> / night</span></p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Entire apartment</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p><span className='price-description'>$80</span><span className='description-title'> / night</span></p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Entire apartment</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p><span className='price-description'>$80</span><span className='description-title'> / night</span></p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Entire apartment</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p><span className='price-description'>$80</span><span className='description-title'> / night</span></p>
                    </a>
                </div>
            </div>
        </Container>
    )
};