import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

import "../styles/Main.scss"




const Main = (props) => {

    return (<article>
        <h1>Main page</h1>
        <p>Some info about site</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </article>
    )
}
export default Main;
