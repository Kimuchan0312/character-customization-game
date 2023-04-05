import React from 'react';

const CustomizationOption = ({ label, onClick, imageUrl }) => {
    return (
        <button className='customization-option' onClick={onClick}>
            <img className='customization-img' src={imageUrl} alt={`${label}`}/>
        </button>
    );
};

export default CustomizationOption;


