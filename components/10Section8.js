import React from "react";
import icon from '../images/icons.png';

const Section8 = () => {
    return(
        <div className="sec8-0">
            <div className="sec8">
              <p>Bandage</p>
              <img src={icon} alt="not found"></img>
            </div>
            <div className="footer">
                <div className="footer-1">
                    <h5>Company Info</h5>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className="footer-2">
                    <h5>Legal</h5>
                    <p>About Us</p>
                    <p>Carrier</p>
                    <p>We are hiring</p>
                    <p>Blog</p>
                </div>
                <div className="footer-3">
                    <h5>Features</h5>
                    <p>Business Marketing</p>
                    <p>User Analytic</p>
                    <p>Live Chat</p>
                    <p>Unlimited Support</p>
                </div>
                <div className="footer-4">
                    <h5>Resources</h5>
                    <p>IOS & Android</p>
                    <p>Watch a Demo</p>
                    <p>Customers</p>
                    <p>API</p>
                </div>
                <div className="footer-5">
                    <h5>Get In Touch</h5>
                    <div className="gmail">
                        <input type="mail"></input>
                        <p>Lore imp sum dolor Amit</p>
                    </div>
                </div>
            </div>
            <div className="sec8-1">
                <span>Made With Love By Finland All Right Reserved </span>
            </div>
        </div>
    )
}
export default Section8