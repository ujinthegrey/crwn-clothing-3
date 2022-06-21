import React from 'react';
import { useNavigate } from 'react-router-dom'

import './menu-item.style.scss'


const MenuItem = ({ title, imageUrl, size }) => {
    let navigate = useNavigate();
    return (
        <div
            className={`menu-item ${size}`}
            onClick={ () => navigate(`/${title}`) }
        >
            <div
                style={{ backgroundImage: `url(${imageUrl})` }}
                className='background-image'
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem
