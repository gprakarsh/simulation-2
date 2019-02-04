import React from 'react';
import houser from './../../assets/houser.png';
import './Header.css';

export default function Header(props) {
    return (
        <div>
            <header>
                <img src={houser} alt="Houser" height="25" />
                <h2>Houser</h2>
            </header>
        </div>
    )
}


