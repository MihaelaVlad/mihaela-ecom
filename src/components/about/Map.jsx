import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapSyle = {
    width: '100%',
    height: '500px',
  };

  const location = {
    lat: 33.9623063,
    lng: -118.3057378,
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapSyle}
        center={location}
        zoom={15}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;
