import React, {useEffect, useState} from 'react';
import Papa from 'papaparse';
import { APIProvider, Map, useMap, AdvancedMarker } from '@vis.gl/react-google-maps';
import Circle from './Circle';

// Custom component to draw the hiking route
const HikingRoute = ({ path }) => {
  const map = useMap();

  React.useEffect(() => {
    if (!map || !path) return;

    // Create a new Polyline for the hiking trail
    const polyline = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: 'rgba(34, 23, 233, 0.43)', // blue for the trail
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });

    polyline.setMap(map);
    return () => polyline.setMap(null); // Cleanup
  }, [map, path]);

  return null;
};

const MyHikingMap = (props) => {

  const center = { lat: 34.135006882756805, lng: -118.32150243918272 };//34.135006882756805, -118.32150243918272

  const trailPoints = [];

  const [trailData, setTrailData] = useState(null);
  const [trailCoordinates, setTrailCoordinates] = useState([]);
  const [mark, setMark] = useState({});

  useEffect(() => {
    const info = JSON.parse(props.info);
    setMark(info.pos);
    console.log(`csv: ${info.file} mark: ${JSON.stringify(info.pos)}`);
    if(info.file) {
      fetch(info.file)
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
    }
  }, [props.info]);

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
    <div style={{ height: '600px', width: '100%' }}>
      <Map
        defaultCenter={center}
        defaultZoom={14}
        mapId="f77567173107e0424cdfdbdc"
      >
        {trailCoordinates.length > 0 && <HikingRoute path={trailCoordinates} />}
        <AdvancedMarker position={{ lat: mark.lat, lng: mark.lng}} />
        <Circle
          center={center}
          radius={150} // Radius in meters
          strokeColor={'rgba(224, 151, 23, 1)'}
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor={'#eeefb7ff'}
          fillOpacity={0.35}
          editable={false}
          draggable={false}
        />
      </Map>
      </div>
    </APIProvider>
  );
};

export default MyHikingMap;