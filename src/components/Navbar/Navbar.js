import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Navbar.css';

const Navbar = ({size, setShow}) => {
    return (
        <nav className='nav-bar'>
            <p className='icon' onClick={() => setShow(true)}>My Shop</p>
            <div className='font-icon'>
                <FontAwesomeIcon icon={faCartPlus} onClick={() => setShow(false)}></FontAwesomeIcon>
                <span>{size}</span>
            </div>
        </nav>
    );
};

export default Navbar;