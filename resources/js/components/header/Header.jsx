import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import imgLogo from "../../../assets/bookworm_icon.svg";
import "./Header.css";

const Header = () => {
    const path_name = window.location.pathname;
    return (
        <Navbar bg="light" expand="lg" className="navbar-header" fixed="top">
            <Navbar.Brand className="navbar-brand">
                <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <img
                        src={imgLogo}
                        width="32"
                        height="32"
                        className="d-inline-block align-top my-auto"
                        alt=""
                    />
                    <p>
                        <b>BOOKWORM</b>
                    </p>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="nav-title">
                <Nav>
                    <NavLink
                        to="/"
                        className={`${path_name === "/" && "select-page"}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={`${path_name === "/shop" && "select-page"}`}
                    >
                        Shop
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={`${path_name === "/about" && "select-page"}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={`${path_name === "/cart" && "select-page"}`}
                    >
                        Cart
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
