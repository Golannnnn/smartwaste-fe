import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { Center, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import myLocationIcon from "../assets/dot.svg";
const Map = () => {
  const [myLocation, setMyLocation] = useState({
    // tel aviv is the default location
    lat: 43.6532,
    lng: 34.7721026,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported for this Browser/OS.");
    }
  }, []);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const binLocation = {
    lat: 32.061993,
    lng: 34.774991,
  };

  return (
    <Center m={5} display="flex" flexDirection="column">
      <Heading as="h1" size="2xl" mb={7}>
        Map
      </Heading>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={myLocation}>
          <MarkerF position={myLocation} icon={myLocationIcon} />
          <MarkerF position={binLocation} />
        </GoogleMap>
      </LoadScript>
    </Center>
  );
};

export default Map;
