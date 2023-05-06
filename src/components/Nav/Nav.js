import React from "react";
import logo from '../../public/images/steam-logo.png'
import style from './Nav.css'

export default function NavBar() {
    return(
        <div style={ style } className="navbar">
            <ul className="menu">
                <li className="logo-holder">
                    <img className="logo" src={logo}></img>
                </li>

                <li className="item">
                    <a className="link" href="/home">Home</a> 
                </li>

                <li className="item">
                    <a className="link" href="#">Store</a>
                </li>

                <li className="item">
                    <a className="link" href="#">Community</a>
                </li>

                <li className="item">
                    <a className="link" href="/user">User</a>
                </li>

                <li className="item">
                    <a className="link" href="#">Chat</a>
                </li>

                <li className="item">
                    <a className="link" href="#">Support</a>
                </li>

                <li className="button">
                    <a className="link" href="/login">Login</a>
                </li>

                {/* <input type="text" className="searchbar" placeholder="Search.." /> */}
            </ul>


        </div>
    )
}