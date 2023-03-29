import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';

const Navbar = ({size}) => {
    return (
        <nav className='nav-bar'>
            <p>My Shop</p>
            <div className='font-icon'>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                <span>{5}</span>
            </div>
        </nav>
    );
};

export default Navbar;