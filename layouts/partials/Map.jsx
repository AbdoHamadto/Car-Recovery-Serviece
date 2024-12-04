"use client"

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
  const mapContainerStyle = {
    width: '100%',
    height: '500px',
  };

  const center = {
    lat: 25.276987,
    lng: 55.296249,
  };
  return (
    <div className='container flex flex-col justify-center items-center my-16'>
      <h3>Find Us</h3>
      <div className='w-full mt-4'>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}
