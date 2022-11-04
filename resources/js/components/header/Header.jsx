import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgLogo from "../../../assets/bookworm_icon.svg";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className='navbar-header' fixed="top">
        <Navbar.Brand href="#home" className='navbar-brand'>
                <img src={imgLogo} width="32" height="32" className="d-inline-block align-top my-auto"
                    alt="" />
                <b className="ml-2">BOOKWORM</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='nav-title'>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    // <header className="my-0">
    //     <Navbar className="navbar navbar-expand-md navbar-light bg-light">
    //         <a className="navbar-brand" href="#">
    //             <img src={imgLogo} width="32" height="32" className="d-inline-block align-top my-auto"
    //                 alt="" />
    //             <b className="ml-2">BOOKWORM</b>
    //         </a>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBookworm">
    //             <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarBookworm">
    //             <ul className="navbar-nav ml-auto">
    //                 <li className="nav-item active">
    //                     <Link className="nav-link" to="/">Home</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/shop">Shop</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/about">About</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/cart">Cart (<span>0</span>) </Link>
    //                 </li>
    //             </ul>
    //         </div>
    //     </Navbar>
    // </header>
  )
}

export default Header
