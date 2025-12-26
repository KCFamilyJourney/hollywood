import React, { useEffect, useRef } from 'react';
import { useMap } from '@vis.gl/react-google-maps';

const Circle = (props) => {
  const map = useMap();
  const circleRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    // Create the circle instance
    circleRef.current = new google.maps.Circle({
      ...props,
      map
    });

    // Cleanup: remove circle when component unmounts
    return () => {
      if (circleRef.current) {
        circleRef.current.setMap(null);
      }
    };
  }, [map]);

  // Update circle properties when props change
  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setOptions(props);
    }
  }, [props]);

  return null;
};

export default Circle;