import React, { useState ,useEffect} from "react";
import "./Nav.css"
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {


    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
    }, [])
    
    return (
    <section className="h-wrapper">
        <div className="h-container flexCenter paddings innerWidth">
                <img className="doggo" src="./doggo.jpg" alt="logo img" width={100}></img>
    
                
        <div className=" flexCenter h-menu">
        {(toggleMenu || screenWidth>=500) && (<ul className="nav-list">
      <li><NavLink exact  className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}} to="/" >
        About
         </NavLink>
           </li> 
                        
        <li><NavLink className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}to="/pet-shop" >
        Pet Shop
         </NavLink>
         </li>
                        
          <li>               
      <NavLink className={({ isActive }) => {
		return isActive ? 'active_class' : '';
		}}to="/service" >
        Services
          </NavLink>
        </li>
      
        <li>
      <NavLink className={({ isActive }) => {
		return isActive ? 'active_class' : '';
                            }} to="/contact" >
        <button className="Button">Contact Us</button>
        </NavLink>
            </li> 
                </ul>
         )}
         <button onClick={toggleNav} className="ham"><MenuIcon/></button>  
       </div>
    </div>
        </section>
    );
};

export default Menu;
