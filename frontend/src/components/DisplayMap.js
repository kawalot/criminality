import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const position = [46.431306, 30.715389]
const zoom = 14

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25,41],
    iconAnchor: [12,36]
});


const DisplayMap = (props) => {

    L.Marker.prototype.options.icon = DefaultIcon;

    const markerList = props.data.map(function(item, index) {
        const position = item.get_coordinates
        const url = item.url

      return (
            <Marker key={index} position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> {url}
                </Popup>
            </Marker>
      )
    })




    return (

      <Map center={position} zoom={zoom} style={{ height: "400px", width: '90%' }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markerList}

      </Map>
    )
}

export default DisplayMap;
