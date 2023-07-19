import React from "react";
import RestItem from "./RestItem";
export const Marker = ({text, onClick, isModalOpen, item}) => {
    const markerStyle = {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#2a9638',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
    };

    const checkMarkStyle = {
        width: '12px',
        height: '12px',
        fill: 'white',
    };

    const modalStyle = {
        width: '250px',
        height: '250px',
        visibility: isModalOpen ? 'visible' : 'hidden',
        marginLeft: '25px',
    }

    return (
        <div>
            <div style={markerStyle} onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={checkMarkStyle}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
            </div>
            <div style={modalStyle}>
                <RestItem item={item}/>
            </div>
        </div>
    );
};
