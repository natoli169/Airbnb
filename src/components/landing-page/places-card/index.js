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
                    <div className='img-div'>
                        <img src={experiences} alt='Experiences' className='card-img' />
                    </div>
                    <p className='description'>Norway</p>
                    <p className='description'>2 Nights PACKAGE all inclusive</p>
                </div>
                <div className='card'>
                    <div className='img-div'>
                        <img src={experiences} alt='Experiences' className='card-img' />
                    </div>
                    <p className='description'>Norway</p>
                    <p className='description'>2 Nights PACKAGE all inclusive</p>
                </div>
                <div className='card'>
                    <div className='img-div'>
                        <img src={experiences} alt='Experiences' className='card-img' />
                    </div>
                    <p className='description'>Norway</p>
                    <p className='description'>2 Nights PACKAGE all inclusive</p>
                </div>
                <div className='card'>
                    <div className='img-div'>
                        <img src={experiences} alt='Experiences' className='card-img' />
                    </div>
                    <p className='description'>Norway</p>
                    <p className='description'>2 Nights PACKAGE all inclusive</p>
                </div>
            </div>
        </Container>
    )
};