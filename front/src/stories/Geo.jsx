import React, { useState } from 'react'
//import package that we have downloaded
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl, FullscreenControl } from "react-map-gl"



const Geo = () => {
  const [lng] = useState(6.8727506);
  const [lat] = useState(45.9246705);
  return (
    <div className="Geo">
      <h1> </h1>
      <Map
        mapboxAccessToken="pk.eyJ1IjoidmFuZXNzYS1qYXMiLCJhIjoiY2xiMmd4dnRoMDRtNzNxcGUzdW94enZvcyJ9.V8dpzPSjjlMJCS8XX45dQQ"
        style={{
          width: "900px",
          height: "450px",
          position: "relative",
          top: "15%",
          left: "31%",
          borderRadius: "15px",
          border: "2px solid black",
        }}

        mapStyle="mapbox://styles/vanessa-jas/clb2pbrvs000b14myx0xajbvs"
      >
        <NavigationControl
          position="bottom-right"
        />
        <Marker
          longitude={lng}
          latitude={lat}
        />


        <FullscreenControl />

      </Map>
    </div>
  )
}

export default Geo