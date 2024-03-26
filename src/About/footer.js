import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
const footer = () => {
    return (
        <>
        <footer className="footer-distributed">

            <div className="footer-left">
                <h3>adoptadoggo</h3>

                <p className="footer-links">
                    <NavLink to="/">About</NavLink>
                    | 
                     <NavLink to="/pet-shop">Pet shop</NavLink>
                    | 
                     <NavLink to="/contact">Contact</NavLink>
                    
                </p>

                <p className="footer-company-name">Copyright © 2021 <strong>adoptadoggo</strong> All rights reserved</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Dhanbad</span>
                        Jharkhand</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 9********0</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href={() => false} >xyz@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the organisation</span>AdoptADoggo is a revolutionary online platform dedicated to connecting potential dog owners with adorable and loving dogs in need of forever homes. 
                    <strong>adoptadoggo</strong> 
                </p>
                <div className="footer-icons">
                    <a href={() => false}><i className="fa fa-facebook"></i></a>
                    <a href={() => false}><i className="fa fa-instagram"></i></a>
                    <a href={() => false}><i className="fa fa-linkedin"></i></a>
                    <a href={() => false}><i className="fa fa-twitter"></i></a>
                    <a href={() => false}><i className="fa fa-youtube"></i></a>
                </div>
            </div>
            </footer>
            </>
    );
}
export default footer;