import React from "react";
import GoogleMapReact from 'google-map-react';
import RestaurantList from "./RestaurantList";
import {Marker} from "./Marker";
import { Map } from "./Map";


//
// const restaurants = [
//     {
//         name: "Restaurant 1",
//         description: "This is Restaurant 1",
//         image: "url_to_restaurant1_image",
//         location: {
//             latitude: 32.084740,
//             longitude: 34.774230,
//         }
//     },
//     {
//         name: "Restaurant 2",
//         description: "This is Restaurant 2",
//         image: "url_to_restaurant2_image",
//         location: {
//             latitude: 32.082760,
//             longitude: 34.773810,
//         }
//     },
// ];

export function App() {
    const [selectedRestIndex, setSelectedRestIndex] = React.useState(null);
    const [restaurants, setRestaurants] = React.useState([])
    const addRestaurant = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }

    function onMarkerClick(item, index) {
        if (selectedRestIndex === index) {
            setSelectedRestIndex(null)
        } else {
            setSelectedRestIndex(index)
        }
    }

    function onAddressSelected(item) {
        console.log("Address selected", item);
        addRestaurant({
            name: item.name,
            description: item.address,
            image: item.image,
            location: {
                latitude: item.location.lat,
                longitude: item.location.lng,
            }
        })
    }

    return (
        <div style={{ display: 'flex' }}>
            <Map
                selectedRestIndex={selectedRestIndex}
                setSelectedRestIndex={setSelectedRestIndex}
                onMarkerClick={onMarkerClick}
                restaurants={restaurants}
            />
            <RestaurantList
                restaurants={restaurants}
                onAddressSelected={onAddressSelected}
            />
        </div>
    );
}