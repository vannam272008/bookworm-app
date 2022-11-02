import React from 'react';
import { Navbar } from 'react-bootstrap';
import imgLogo from "../../../assets/bookworm_icon.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="my-0">
        <Navbar className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={imgLogo} width="32" height="32" className="d-inline-block align-top my-auto"
                    alt="" />
                <b className="ml-2">BOOKWORM</b>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBookworm">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarBookworm">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cart (<span>0</span>) </a>
                    </li>
                </ul>
            </div>
        </Navbar>
    </header>
  )
}

export default Header
