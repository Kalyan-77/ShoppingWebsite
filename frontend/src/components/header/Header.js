import React, { useContext, useState } from 'react';
import { MdOutlineMenu, MdClose, MdOutlineAddShoppingCart } from "react-icons/md";
import './header.css';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';

export const Header = () => {
    const state = useContext(GlobalState);
    const [isLogged, setIsLogged] = state.UserApi.isLogged;
    const [isAdmin, setIsAdmin] = state.UserApi.isAdmin;
    const [cart, setCart] = state.UserApi.cart;
    const [searchQuery, setSearchQuery] = useState('');

    const adminRouter = () => (
        <>
            <li><Link to='/create_product'>Create Product</Link></li>
            <li><Link to='/categories'>Categories</Link></li>
        </>
    );

    const loggedRouter = () => (
        <>
            <li><Link to='/history'>History</Link></li>
            <li><Link to='/logout'>Logout</Link></li>
        </>
    );

    return (
        <header>
            <div className='menu'>
                <MdOutlineMenu size={30} />
                <MdClose />
            </div>
            <div className='logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5uEL6CgpRbC8NyB1zn-9QSklKdmZ8wVN0A&s'></img>
                
            </div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/'>{isAdmin ? 'Products' : 'Shop'}</Link></li>
                <li><Link to='/items'>Items</Link></li>
                <li><Link to='/offers'>Offers</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                
                
                {isAdmin && adminRouter()}

                {/* Search bar */}
                <li>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-bar"
                    />
                </li>

                <div className="header-right">
                    {isLogged ? loggedRouter() : <li><Link to='/login'>Login</Link></li>}
                    {isAdmin ? '' : (
                        <div className='cart-icon'>
                            <span>{cart.length}</span>
                            <Link to='/cart'>
                                <MdOutlineAddShoppingCart size={30} />
                            </Link>
                        </div>
                    )}
                </div>
            </ul>
        </header>
    );
};
