import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { CButton } from '@coreui/react'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { markerOffset: -15, name: "Fremont", coordinates: [-121.9886, 37.5485] },
  { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 25, name: "Dubai", coordinates: [55.2708, 25.2048] },
  { markerOffset: 25, name: "Sydney", coordinates: [151.2093, -33.8688] },
  { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
];

const MapChart = () => (
  <div>
    <ComposableMap projectionConfig={{scale: 200 }} >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} class='btn'/>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  </div>
);

export default MapChart;
