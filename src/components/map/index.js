import React from "react";
import { Container } from "./style";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const GMap = () => {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }} />;
};

const WrappedMap = withScriptjs(withGoogleMap(GMap));

export const Map = () => {
  return (
    <Container>
      <WrappedMap
        googleMapURL={``}
        loadingElement={<div className='fill' />}
        containerElement={<div className='fill' />}
        mapElement={<div className='fill' />}
      />
    </Container>
  );
};
