import React from 'react'
import { Nav } from 'react-bootstrap';
import imgLogo from "../../../assets/bookworm_icon.svg";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="mt-5">
        <Nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={imgLogo} width="64" height="64" className="d-inline-block align-top" alt=""/>
                <div className="information-website ml-3">
                    <b>BOOKWORM</b>
                    <span>Address</span>
                    <span>Phone</span>
                </div>
            </a>
        </Nav>
    </footer>
  )
}

export default Footer
