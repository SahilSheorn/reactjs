import React from 'react';
import menus from "../data/NavMenus.js";

const Nav = () => {
  console.log("Menus =>", menus);
  return (
    <div>
      <div className="container-fluid">
            <div className="navbar">
              <div className='logo'>
                <ul>
                  <li>Bandage</li>
                </ul> 
                </div>
                <div className="nav_menu">
                    <ul>
                      {
                        menus.map((item, index)=>{
                            return (
                              <li key={index}><a href="/">{item}</a></li>
                            )
                        })
                      }
                        {/* <li><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Pages</a></li> */}
                    </ul>
                </div>
                <div className="login">
                    <ul>
                      <li>Login / Register</li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav