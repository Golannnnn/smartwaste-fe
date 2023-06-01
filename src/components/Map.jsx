import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoBoxF,
} from "@react-google-maps/api";
import { Center, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import myLocationIcon from "../assets/dot.svg";
import blackBin from "../assets/blackbin.png";
import blueBin from "../assets/bluebin.png";
import greenBin from "../assets/greenbin.png";
import orangeBin from "../assets/orangebin.png";
import purpleBin from "../assets/purplebin.png";
import textileBin from "../assets/textilebin.png";

import Border from "./Border";
const Map = ({ result }) => {
  const [myLocation, setMyLocation] = useState({
    // tel aviv is the default location
    lat: 43.6532,
    lng: 34.7721026,
  });
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

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
    height: isLargeScreen ? "500px" : "400px",
    width: "100%",
    borderRadius: "10px",
  };

  const binLocations =
    result &&
    result.map((bin) => {
      return {
        type: bin.type,
        lng: bin.location.coordinates[0],
        lat: bin.location.coordinates[1],
      };
    });

  return (
    <>
      <Center pt={3} m={5} mx={1} display="flex" flexDirection="column">
        <Heading as="h1" size="2xl" mb={7}>
          Map
        </Heading>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={myLocation}
          >
            <MarkerF position={myLocation} icon={myLocationIcon} />
            {binLocations &&
              binLocations.map((bin) => {
                return (
                  <>
                    <InfoBoxF
                      position={{
                        lat: bin.lat,
                        lng: bin.lng,
                      }}
                      options={{
                        closeBoxURL: ``,
                        enableEventPropagation: true,
                      }}
                    >
                      <div
                        style={{
                          background: `white`,
                          border: `1px solid #ccc`,
                          padding: 5,
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Text fontSize="13px">{bin.type}</Text>
                      </div>
                    </InfoBoxF>
                    <MarkerF
                      position={{
                        lat: bin.lat,
                        lng: bin.lng,
                      }}
                      icon={{
                        url:
                          bin.type === "glass"
                            ? purpleBin
                            : bin.type === "Compost" && greenBin,
                        scaledSize: { width: 45, height: 45 },
                      }}
                    />
                  </>
                );
              })}
          </GoogleMap>
        </LoadScript>
      </Center>
      <Border />
    </>
  );
};

export default Map;
