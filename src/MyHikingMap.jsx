import React, {useEffect, useState} from 'react';
import Papa from 'papaparse';
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';

// Custom component to draw the hiking route
const HikingRoute = ({ path }) => {
  const map = useMap();

  React.useEffect(() => {
    if (!map || !path) return;

    // Create a new Polyline for the hiking trail
    const polyline = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: '#FF0000', // Red for the trail
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });

    polyline.setMap(map);
    return () => polyline.setMap(null); // Cleanup
  }, [map, path]);

  return null;
};

const MyHikingMap = () => {

  const center = { lat: 34.11779722954947, lng: -118.33004291534355 };

  const trailPoints = [
    { lat: 34.117747030034806, lng: -118.32982868784912 }, // Example point 1
    { lat: 34.12101563845949, lng: -118.32697481763309 }, // Example point 2
  ];

  const [trailData, setTrailData] = useState(null);
  const [trailCoordinates, setTrailCoordinates] = useState([
    { lat: 34.117747030034806, lng: -118.32982868784912 }, // Example point 1
    { lat: 34.12101563845949, lng: -118.32697481763309 }, // Example point 2
  ]);

  useEffect(() => {
  fetch('data.csv')
    .then(response => response.text())
    .then(csvText => {
      Papa.parse(csvText, {
        header: true,
        complete: (result) => {
          //console.log(result.data)
          setTrailData(result.data);
        },
      });
    });
}, []);

useEffect(() => {
  trailPoints.splice(0, trailPoints.length);
  if(trailData){
    trailData.map((data)=>{
        const obj = {lat: parseFloat(data.lat), lng: parseFloat(data.lng)};
        trailPoints.push(obj);
    });
    setTrailCoordinates(trailPoints);
  }
}, [trailData]);

return (
    <APIProvider apiKey="AIzaSyD9V5o6rzbUAIy121ENmU_wW9bO_ysrpPg">
    <div style={{ height: '600px', width: '800px' }}>
      <Map
        defaultCenter={center}
        defaultZoom={15}
        mapId="f77567173107e0424cdfdbdc"
      >
        {trailCoordinates.length > 0 && <HikingRoute path={trailCoordinates} />}
      </Map>
      </div>
    </APIProvider>
  );
};

export default MyHikingMap;