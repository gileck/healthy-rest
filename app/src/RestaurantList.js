import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import RestItem from "./RestItem";
import {SearchAddress} from "./Search";

const RestaurantList = ({ restaurants, onRestClick, onAddressSelected }) => {
    return (
        <div>
            <SearchAddress onAddressSelected={onAddressSelected}/>
            <List>
                {restaurants.map((restaurant, index) => (
                    <ListItem alignItems="flex-start" key={index}>
                       <RestItem item={restaurant} onClick={onRestClick} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default RestaurantList;
