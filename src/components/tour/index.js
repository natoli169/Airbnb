import React, { useState } from "react";
import { Container } from "./style";
import { useSpring, animated } from "react-spring";

export const Tour = () => {
  const [tourDate, setTourDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle changes in inputs
  const onChange = e => setTourDate(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (tourDate !== "") {
      setSubmitted(true);
    }
  };
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <Container>
      {!submitted && (
        <>
          <animated.div style={fade}>
            <h1 className='title'>Request A Tour</h1>
            <form className='main-form'>
              <div className='date'>
                <label for='dateofbirth'>Pick a date</label>
                <input
                  type='date'
                  name='tourDate'
                  className='date-picker'
                  required
                  value={tourDate}
                  onChange={onChange}
                />
              </div>
              <input type='submit' className='btn' onClick={onSubmit} />
            </form>
          </animated.div>
        </>
      )}
      {submitted && (
        <animated.h1 style={fade} className='th-title'>
          <h1>Thank you for submiting!!!</h1>
        </animated.h1>
      )}
    </Container>
  );
};
