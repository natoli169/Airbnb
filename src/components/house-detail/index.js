import React, { useState, useContext } from "react";
import { Container } from "./style";
import { HouseContext } from "../../context/house/HouseState";
import { Bedroom } from "../../assets/bedroom";
import { Bahroom } from "../../assets/bahroom";
import { Parking } from "../../assets/parking";
import { Tour } from "../tour";
import { BuyButton } from "../button";

export const HouseDetail = () => {
  const houseContext = useContext(HouseContext);

  const {
    house: {
      streetAdress,
      zipCode,
      state,
      city,
      minPrice,
      maxPrice,
      dateSold,
      bathrooms,
      bedrooms,
      parking,
      yearBuilt,
      status,
      homeType,
      openHouse,
      listedBy,
      houseImage,
      squareFeet
    }
  } = houseContext;

  return (
    <Container>
      <div className='header'>
        <div className='main-text'>
          <h1 className='title'>Beatiful House</h1>
          <a href='/' className='sub'>
            {city}
          </a>
        </div>
        <div className='dis'>
          <img src={houseImage} alt={homeType} className='image' />
          <div className='dis-text'>
            <h1 className='host'>
              Hosted by{" "}
              <span className='hosted'>
                Natoli<span className='listed'>({listedBy})</span>
              </span>
            </h1>
            <div className='facilities'>
              <div className='facility'>
                <Bedroom />
                <div className='facility-text'>{bedrooms} Bedrooms</div>
              </div>
              <div className='facility'>
                <Bahroom />
                <div className='facility-text'>{bathrooms} Bathrooms</div>
              </div>
              <div className='facility'>
                <Parking />
                <div className='facility-text'>{parking} Parking</div>
              </div>
            </div>
            <div className='address'>
              <h1 className='state'>{state}</h1>
              <h2 className='city'>{city}</h2>
              <p className='streetAdress'>{streetAdress}</p>
            </div>
          </div>
        </div>
      </div>
      <section className='description'>
        <div className='main'>
          {openHouse === "yes" && <Tour />}
          <div className='detail'>
            <div className='discription'>
              <h1>Description</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur voluptate quasi, harum, eius vitae et cum, qui esse
                atque ipsam voluptatem blanditiis? Vel ad voluptates veniam
                aliquam dicta harum repellendus soluta exercitationem.
              </p>
            </div>
            <div className='his'>
              <h2>Status: {status}</h2>
              <h2>Year Built: {status}</h2>
              <h2>Square feet: {status}</h2>
              <h2>Date Sold: {dateSold}</h2>
            </div>
          </div>
        </div>
        <div className='sub'>
          <h2 className='sub-title'>
            Minimum-price<span className='value'>{minPrice}</span>
            Maxmium-price<span className='value'>{maxPrice}</span>
            <BuyButton />
          </h2>
        </div>
      </section>
    </Container>
  );
};
