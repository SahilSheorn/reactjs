import React from "react";
import imgg1 from '../images/sec7.png';
import imgg2 from '../images/sec71.png';
import imgg01 from '../images/eclip-1.png';
import imgg02 from '../images/Frame 1.png';
import tag from '../images/tag.png';
import icon from '../images/icn arrow-right .icn-xs.png';

const Section7 = () => {
    return (
        
    <div className="sec7">
            <div className="sec7-first">
                <h6>Practice Advice</h6>
                <h3>Featured Posts</h3>
            </div>
   
        <div className="content">
            <div className="sec-7-2nd">
                <div className="sec7-part1">
                    <div className="sec7-01">
                        <img src={imgg1} alt="not found"></img>
                    </div>
                    <div className="sec7-02">
                        <p className="para">English Department</p>
                        <h5>Graphic Design</h5>
                        <div className="para2">
                            <p>We focus on ergonomics and<br />
                                meeting you where you work. It's <br />
                                only a keystroke away.</p>
                        </div>
                        <div className="sec7-03">
                            <img src={tag} alt="not found"></img>
                            <h6>15 Sales</h6>
                        </div>
                        <div className="price">
                            <div className="price-1">
                                <h3>$16.4</h3>
                                <h4>8</h4>
                            </div>
                            <div className="price-2">
                                <h3>$6.4</h3>
                                <h4>8</h4>
                            </div>
                        </div>
                        <div className="imgg01">
                          <img src={imgg01} alt="not found"></img>
                        </div>
                        <div className="imgg02">
                          <img src={imgg02} alt="not found"></img>
                        </div>
                        <div className="button">
                            <button>Learn More<span><img src={icon} alt="not found"></img></span></button>
                        </div>
                    </div>
                    {/* section 2 */}
                <div className="sec7-part2">
                            <div className="sec7-a">
                                <img src={imgg2} alt="not found"></img>
                            </div>
                            <div className="sec7-02">
                        <p className="para">English Department</p>
                        <h5>Graphic Design</h5>
                        <div className="para2">
                            <p>We focus on ergonomics and<br />
                                meeting you where you work. It's <br />
                                only a keystroke away.</p>
                        </div>
                        <div className="sec7-03">
                            <img src={tag} alt="not found"></img>
                            <h6>15 Sales</h6>
                        </div>
                        <div className="price">
                            <div className="price-1">
                                <h3>$16.4</h3>
                                <h4>8</h4>
                            </div>
                            <div className="price-2">
                                <h3>$6.4</h3>
                                <h4>8</h4>
                            </div>
                        </div>
                        <div className="imgg01">
                          <img src={imgg01} alt="not found"></img>
                        </div>
                        <div className="imgg02">
                          <img src={imgg02} alt="not found"></img>
                        </div>
                        <div className="button">
                            <button>Learn More<span><img src={icon} alt="not found"></img></span></button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
    )
}
export default Section7