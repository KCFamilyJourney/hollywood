import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function MyMap() {
  return (
    <APIProvider apiKey={'AIzaSyD9V5o6rzbUAIy121ENmU_wW9bO_ysrpPg'}>
      <div style={{ height: '400px', width: '100%' }}>
        <Map
          defaultCenter={{ lat: 34.05, lng: -118.24 }}
          defaultZoom={10}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        >
          <Marker position={{ lat: 34.05, lng: -118.24 }} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default MyMap;
