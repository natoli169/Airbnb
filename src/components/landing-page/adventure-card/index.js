import React from "react";
import adventures from "../../../assets/adventures.png";
import experiences from "../../../assets/experiences.png";
import stays from "../../../assets/stays.png";
import { Container } from "./style";

export const AdventureCard = () => {
    return (
        <Container>
            <div>
                <h2 className='title'>Introducing Airbnb Adventures</h2>
                <p className='description'>Multi-day trips led by local experts-activities, meals, and stays included.</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Norway</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p className='sub-description'>From $68/person 3 days</p>
                        <p className='sub-description'>Rating</p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Norway</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p className='sub-description'>From $68/person 3 days</p>
                        <p className='sub-description'>Rating</p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Norway</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p className='sub-description'>From $68/person 3 days</p>
                        <p className='sub-description'>Rating</p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Norway</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p className='sub-description'>From $68/person 3 days</p>
                        <p className='sub-description'>Rating</p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Norway</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p className='sub-description'>From $68/person 3 days</p>
                        <p className='sub-description'>Rating</p>
                    </a>
                </div>
                <div className='card'>
                    <a href="#">
                        <div className='img-div'>
                            <img src={experiences} alt='Experiences' className='card-img' />
                        </div>
                        <p className='description-title'>Norway</p>
                        <p className='sub-description'>2 Nights PACKAGE all inclusive</p>
                        <p className='sub-description'>From $68/person 3 days</p>
                        <p className='sub-description'>Rating</p>
                    </a>
                </div>
            </div>
        </Container>
    );
};
