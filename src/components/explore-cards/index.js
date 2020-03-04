import React from "react";
import adventures from "../../assets/adventures.png";
import experiences from "../../assets/experiences.png";
import stays from "../../assets/stays.png";
import { Container } from "./style";

export const ExploreCards = () => {
  return (
    <Container>
      <h2 className='title'>Hello, Lorem ipsum dolor sit.</h2>
      <div className='cards'>
        <div className='card'>
          <img src={adventures} alt='Adventures' className='card-img' />
          <h2 className='catagoery'>Adventures</h2>
        </div>
        <div className='card'>
          <img src={experiences} alt='Experiences' className='card-img' />
          <h2 className='catagoery'>Experiences</h2>
        </div>
        <div className='card'>
          <img src={stays} alt='stays' className='card-img' />
          <h2 className='catagoery'>Stays</h2>
        </div>
      </div>
    </Container>
  );
};
