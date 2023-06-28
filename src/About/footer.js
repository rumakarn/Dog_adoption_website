import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
const footer = () => {
    return (
        <>
        <footer class="footer-distributed">

            <div class="footer-left">
                <h3>adoptadoggo</h3>

                <p class="footer-links">
                    <NavLink to="/">About</NavLink>
                    | 
                     <NavLink to="/pet-shop">Pet shop</NavLink>
                    | 
                     <NavLink to="/contact">Contact</NavLink>
                    
                </p>

                <p class="footer-company-name">Copyright © 2021 <strong>adoptadoggo</strong> All rights reserved</p>
            </div>

            <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>Dhanbad</span>
                        Jharkhand</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>+91 9********0</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="#" >xyz@gmail.com</a></p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <span>About the organisation</span>AdoptADoggo is a revolutionary online platform dedicated to connecting potential dog owners with adorable and loving dogs in need of forever homes. 
                    <strong>adoptadoggo</strong> 
                </p>
                <div class="footer-icons">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                </div>
            </div>
            </footer>
            </>
    );
}
export default footer;