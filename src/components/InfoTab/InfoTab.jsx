import React, {useState} from 'react';
import { Rating } from '@mui/material'; 
import { Chip, Stack, Grid } from '@mui/material';
import { GoogleMap, useJsApiLoader, Marker, MarkerClusterer } from '@react-google-maps/api';

const InfoTab = (props) => {
    const { location } = props;

    return (
        <>
            <Grid style={{width: "100%"}}>
                <Grid item xs={6}>
                    <h3>Address:</h3>
                    <div>
                        <span style={{fontSize: 24}}>{location.Address}, {location.Suburb}, {location.City}</span>
                    </div>
                    <h3>Total rating:</h3>
                    <div style={{display: 'flex'}}>
                        <p style={{fontSize: 28, margin: 0}}>{location.Rating}</p>
                        <Rating style={{paddingTop: 4, paddingLeft: 8}} name="size-large" defaultValue={4} value={location.Rating} size="large" readOnly precision={0.5} controlled/>
                    </div>
                    <h3>Price:</h3>
                    <div>
                        <span style={{fontSize: 24, fontWeight: 'bolder'}}>{location.Price && location.Price === 1 ? '$' : location.Price === 2 ? '$$' : location.Price === 3 ? '$$$' : '$$$$'}</span>
                    </div>
                    <h3>Type:</h3>
                    <div style={{fontSize: 24}}>
                    <Stack direction="row" spacing={1}>
                        
                        {location.Type &&location.Type.map((type, index) => {
                            return (
                                <Chip style={{fontSize: 24, height: 42, width: 132}} label={type} color={type === 'dinner' ? 'primary': type === 'lunch' && 'success'} />
                            )
                        })}
                    </Stack>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Map locate={location && location.Name} />
                </Grid>
            </Grid>
        </>
    );
};

export default InfoTab;


const containerStyle = {
  width: '50vw',
  height: '50vh'
};

const center = {
  lat: 19.3613586,
  lng: -99.266365,
};



const myPlaces = [
    { id: "1", pos: { lat: 19.3613586, lng: -99.266365 } },// sonora
    { id: "2", pos: { lat: 19.389331, lng: -99.1527939 } },// vilsito
  ];

function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const loc = props.locate === 'Sonora Grill Santa Fe' ? myPlaces[1] : myPlaces[0];
 
  ////////
  const [mapRef, setMapRef] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [zoom, setZoom] = useState(15); 
  const [infoOpen, setInfoOpen] = useState(false);

  const fitBounds = map => {
    const bounds = new window.google.maps.LatLngBounds();

    bounds.extend(loc.pos);

    map.fitBounds(bounds);
  };

  const loadHandler = map => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
  };
   // We have to create a mapping of our places to actual Marker objects
   const markerLoadHandler = (marker, place) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [place.id]: marker };
    });
  };
  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place);

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // zoom out 
    if (zoom < 13) {
      setZoom(13);
    }
  };

  
  //for creating the map
  const [map, setMap] = React.useState(null)
  

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div style={{padding: "20px"}}>
      <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={loadHandler}
        onUnmount={onUnmount}
      >
        <MarkerClusterer>
          {clusterer =>
            myPlaces.map(place => (
              <Marker
                key={place.id}
                clusterer={clusterer}
                position={place.pos}
                // name={place.name}
                onLoad={marker => markerLoadHandler(marker, place)}
                onClick={event => markerClickHandler(event, place)}
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
      </div>
    </div>
  ) : <></>
}
