import React from 'react';
import phn from '../images/phn.png';
import mail from '../images/mail.png';
import inst from '../images/inst.png';
import yt from '../images/yt.png';
import fb from '../images/fb.png';
import twt from '../images/twt.png';
import "./navbar.css";

const Top = () => {
  return (
    <div>

      <div className="container_1">
            <div className="heading">
                <div className="nav_menu">
                    <ul>
                        <li><img src={phn} alt='not available for this life'></img>(225) 555-0118</li>
                        <li><img src={mail} alt='not found'></img>michelle.rivera@example.com</li>
                    </ul>
                </div>
                <p>Follow Us and a chance to win 80% off</p>
                <div className="nav_logos">
                    <ul>
                      <li>Follow Us  :</li>
                      <li><img src={inst} alt='not found'></img></li>
                      <li><img src={yt} alt='not found'></img></li>
                      <li><img src={fb} alt='not found'></img></li>
                      <li><img src={twt} alt='not found'></img></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Top
