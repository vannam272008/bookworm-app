import React from 'react'
import { Navbar } from 'react-bootstrap';
import imgLogo from "../../../assets/bookworm_icon.svg";
import "./Footer.css"

const Footer = (props) => {
  return (
    <footer className="mt-5">
        <Navbar className="navbar navbar-light bg-light" fixed={props.fixed}>
            <a className="navbar-brand" href="#">
                <img src={imgLogo} width="64" height="64" className="d-inline-block align-top" alt=""/>
                <div className="information-website ml-3">
                    <b>BOOKWORM</b>
                    <span>Address</span>
                    <span>Phone</span>
                </div>
            </a>
        </Navbar>
    </footer>
  )
}

export default Footer
