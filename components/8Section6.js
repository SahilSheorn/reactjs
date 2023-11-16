import React from 'react';
import Book from '../images/book.png';
import Book2 from '../images/book2.png';
import Arrow from '../images/arrow.png';

const Section6 = () => {
  return (
    <div className='sec6'>
        <div className='sec6-part1'> 
            <h2>Featured Products</h2>
            <h3>THE BEST SERVICES</h3>
            <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className='sec6-pics'>
            <div>
                <img src={Book} alt='Not Found'></img>
                <h3>Easy Wins</h3>
                <p>Get your best looking smile <br/> now!</p>
            </div>
            <div>
                <img src={Book2} alt='Not Found'></img>
                <h3>Concrete</h3>
                <p>Defalcate is most focused in <br/> helping you discover your most <br/> beautiful smile</p>
            </div>
            <div>
                <img src={Arrow} alt='Not Found'></img>
                <h3>Hack Growth</h3>
                <p>Overcame any hurdle or any <br/> other problem.</p>
            </div>
        </div>
    </div>
    )
  }
  export default Section6