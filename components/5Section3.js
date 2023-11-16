import React from "react";
import firstimg from '../images/01firstimg.jpg';
import secondimg from '../images/02secondimg.jpg';
import thirdimg from '../images/03thirdimg.jpg';

const Section3 = () => {
    return (
        <div className="Containerr">
            <div className="first">
                <img src={firstimg} alt="not found" ></img>
            </div>
            <div className="new">
                    <h6>Top Product Of<br/>
                        the Week</h6>
                        <p>EXPLORE ITEMS</p>
                </div>
            <div className="second">
            <img src={secondimg} alt="not found" ></img>
            <img className="thirdimg" src={thirdimg} alt="not found" ></img>
            </div>
        </div>
        )
    }
    export default Section3