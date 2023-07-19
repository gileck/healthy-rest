import {Marker} from "./Marker";
import React from "react";
import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export function Map({ restaurants, onMarkerClick, selectedRestIndex, setSelectedRestIndex}) {
    const defaultProps = {
        center: {
            lat: 32.071962,
            lng: 34.785857
        },
        zoom: 14
    };
    return <div style={{height: '100vh', width: '50%', flex: 1, padding: '10px', boxSizing: 'border-box'}}>
        <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyDSlp-3D4euFkPH_7smflXKwu9p3x8j8y8"}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            onClick={() => setSelectedRestIndex(null)}
        >
            {restaurants.map((item, index) => (
                <Marker
                    key={index}
                    lat={item.location.latitude}
                    lng={item.location.longitude}
                    text={item.name}
                    onClick={() => onMarkerClick(item, index)}
                    isModalOpen={selectedRestIndex === index}
                    item={item}
                />


            ))}
        </GoogleMapReact>
    </div>
}