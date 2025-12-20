import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function MyMap() {
  return (
    <APIProvider apiKey={'AIzaSyD9V5o6rzbUAIy121ENmU_wW9bO_ysrpPg'}>
      <div style={{ height: '400px', width: '100%' }}>
        <Map
          defaultCenter={{ lat: 34.12, lng: -118.33 }}
          defaultZoom={16}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <Marker position={{ lat: 34.13, lng: -118.336 }} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default MyMap;