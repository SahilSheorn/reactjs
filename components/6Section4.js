import React from "react";
import img01 from '../images/1st.png';
import img02 from '../images/2nd.png';
import img03 from '../images//3rd.png';
import img04 from '../images/4th.png';
import img05 from '../images//5th.png';
import img07 from '../images/7th.png';
import img08 from '../images//8th.png';
import img09 from '../images/9th.png';


const Section4 = ()=>{
    return(
        <div className="sec4"> 
        <div className="sec4-part1">
            <h3>Featured Products</h3>
            <h2>BESTSELLER PRODUCTS</h2>
            <h6>Problems trying to resolve the conflict between </h6>
        </div> 
    <div className="sec4_part"> 
        <div className="sec4-part2">
            
            <div>
                <img src={img01} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img02} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img03} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img04} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img05} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            </div>
            <div className="sec4-part3">
            <div>
                <img src={img01} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img07} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img08} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img09} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
            <div>
                <img src={img03} alt="not found"></img>
                <h3>Graphic Design</h3>
                <p>English Department</p>
                <p>$16.48 <span>$6.48</span></p>
            </div>
        </div>
        <div className="sec4-btn">
            <button>LOAD MORE PRODUCTS</button>
        </div>
        </div>
    </div>
    )
}
export default Section4;