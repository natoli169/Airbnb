import React, { useState, useContext } from "react";
import { HouseContext } from "../../context/house/HouseState";
import { Container } from "./style";

export const Host = () => {
  // init our house context
  const houseContext = useContext(HouseContext);

  // Destructured the things we want from context
  const { addHouse } = houseContext;

  // init our component state
  const [house, setHouse] = useState({
    streetAdress: "",
    zipCode: "",
    city: "",
    state: "",
    minPrice: "",
    maxPrice: "",
    dateSold: "",
    bathrooms: "",
    bedrooms: "",
    parking: "",
    yearBuilt: "",
    status: "",
    homeType: "",
    openHouse: "",
    listedBy: "",
    squareFeet: "",
    houseImage: ""
  });

  // Destructured the fields from house
  const {
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
  } = house;

  // Handle changes in inputs
  const onChange = e => setHouse({ ...house, [e.target.name]: e.target.value });

  // Handle when we submit the form
  function onSubmit(e) {
    // Stop the normal process of reloading
    e.preventDefault();

    // call our context function
    addHouse(house);
  }

  return (
    <Container>
      <h1 className='title'>Fill in these Form to host your house</h1>
      <form className='form-group'>
        <div className='input-group'>
          <input
            type='text'
            name='streetAdress'
            placeholder='Street Adress'
            value={streetAdress}
            onChange={onChange}
            className='text-input'
            required
          />
          <label htmlFor='streetAdress' className='form__label'>
            Street Adress
          </label>
        </div>
        <div className='input-group'>
          <input
            type='text'
            name='zipCode'
            placeholder='Zip code'
            value={zipCode}
            onChange={onChange}
            className='text-input'
            required
          />
          <label htmlFor='zipCod' className='form__label'>
            Zip code
          </label>
        </div>
        <div className='input-group'>
          <input
            type='text'
            name='city'
            placeholder='City'
            value={city}
            onChange={onChange}
            className='text-input'
            required
          />
          <label htmlFor='city' className='form__label'>
            City
          </label>
        </div>
        <div className='input-group price'>
          <div className='first'>
            <input
              type='text'
              name='minPrice'
              placeholder='Minimum Price'
              value={minPrice}
              onChange={onChange}
              className='text-input'
              required
            />
            <label htmlFor='minPrice' className='form__label'>
              Minimum Price
            </label>
          </div>
          <div className='second'>
            <input
              type='text'
              name='maxPrice'
              placeholder='Maxmium Price'
              value={maxPrice}
              onChange={onChange}
              className='text-input'
              required
            />
            <label htmlFor='maxPrice' className='form__label'>
              Maxmium Price
            </label>
          </div>
        </div>
        <div className='input-group'>
          <input
            type='date'
            name='dateSold'
            placeholder='Date Sold'
            value={dateSold}
            onChange={onChange}
            className='text-input'
            required
          />
          <label htmlFor='dateSold' className='form__label'>
            Date Sold
          </label>
        </div>
        <div className='input-group'>
          <input
            type='text'
            name='state'
            placeholder='State'
            value={state}
            onChange={onChange}
            className='text-input'
            required
          />
          <label htmlFor='state' className='form__label'>
            State
          </label>
        </div>
        <div className='input-group full'>
          <div className='first'>
            <input
              type='number'
              min='1'
              max='10'
              name='bedrooms'
              placeholder='No of Bedrooms'
              value={bedrooms}
              onChange={onChange}
              className='text-input'
              required
            />
            <label htmlFor='bedrooms' className='form__label'>
              Bedrooms
            </label>
          </div>
          <div className='second'>
            <input
              type='number'
              min='1'
              max='10'
              name='bathrooms'
              placeholder='No of Bathrooms'
              value={bathrooms}
              onChange={onChange}
              className='text-input'
              required
            />
            <label htmlFor='bathrooms' className='form__label'>
              Bathrooms
            </label>
          </div>
          <div className='third'>
            <input
              type='number'
              min='1'
              max='10'
              name='parking'
              placeholder='No of Parking'
              value={parking}
              onChange={onChange}
              className='text-input'
              required
            />
            <label htmlFor='parking' className='form__label'>
              Parking
            </label>
          </div>
        </div>
        <div className='input-group'>
          <input
            type='date'
            name='yearBuilt'
            placeholder='Year Built'
            value={yearBuilt}
            onChange={onChange}
            className='text-input'
            required
          />
          <label htmlFor='yearBuilt' className='form__label'>
            Year Built
          </label>
        </div>
        <div className='input-group '>
          <h5 className='sub-title'>Status</h5>
          <div className='inputGroup'>
            <input
              id='sale'
              type='radio'
              name='status'
              value='sale'
              checked={status === "sale"}
              onChange={onChange}
            />
            <label htmlFor='sale'>For Sale</label>
          </div>
          <div className='inputGroup'>
            <input
              id='rent'
              type='radio'
              name='status'
              value='rent'
              checked={status === "rent"}
              onChange={onChange}
            />
            <label htmlFor='rent'>For Rent</label>
          </div>
        </div>
        <div className='input-group '>
          <h5 className='sub-title'>Home Type</h5>
          <div className='inputGroup'>
            <input
              id='house'
              type='radio'
              name='homeType'
              value='house'
              checked={homeType === "house"}
              onChange={onChange}
            />
            <label htmlFor='house'>House</label>
          </div>
          <div className='inputGroup'>
            <input
              id='condo'
              type='radio'
              name='homeType'
              value='condo'
              checked={homeType === "condo"}
              onChange={onChange}
            />
            <label htmlFor='condo'>Condo</label>
          </div>
          <div className='inputGroup'>
            <input
              id='apartment'
              type='radio'
              name='homeType'
              value='apartment'
              checked={homeType === "apartment"}
              onChange={onChange}
            />
            <label htmlFor='apartment'>Apartment</label>
          </div>
        </div>
        <div className='input-group '>
          <div className='first'>
            <h5 className='sub-title'>Is it an open house?</h5>
            <div className='inputGroup'>
              <input
                id='yes'
                type='radio'
                name='openHouse'
                value='yes'
                checked={openHouse === "yes"}
                onChange={onChange}
              />
              <label htmlFor='yes'>Yes</label>
            </div>
            <div className='inputGroup'>
              <input
                id='no'
                type='radio'
                name='openHouse'
                value='no'
                checked={openHouse === "no"}
                onChange={onChange}
              />
              <label htmlFor='no'>No</label>
            </div>
          </div>
          <div className='second'>
            <h5 className='sub-title'>Listed by?</h5>
            <div className='inputGroup'>
              <input
                id='owner'
                type='radio'
                name='listedBy'
                value='owner'
                checked={listedBy === "owner"}
                onChange={onChange}
              />
              <label htmlFor='owner'>Owner</label>
            </div>
            <div className='inputGroup'>
              <input
                id='agent'
                type='radio'
                name='listedBy'
                value='agent'
                checked={listedBy === "agent"}
                onChange={onChange}
              />
              <label htmlFor='agent'>Agent</label>
            </div>
          </div>
        </div>
        <div className='input-group'>
          <input
            type='number'
            min='1'
            name='squareFeet'
            placeholder='No of Square Feet'
            value={squareFeet}
            onChange={onChange}
            className='text-input'
            required
          />
          <label htmlFor='squareFeet' className='form__label'>
            Square Feet
          </label>
        </div>
        <div className='input-group'>
          <h5 className='sub-title'>Images</h5>
          <input type='file' value={houseImage} onChange={onChange} />
        </div>

        <div className='sub'></div>
        <input
          className='example_a'
          type='submit'
          value='Host'
          onClick={onSubmit}
        ></input>
      </form>
    </Container>
  );
};
