import React from 'react'
import girl from '../images/girl.png';

const Section1 = () => {
  return (
    <div className='warp'>
      <div className='sec1'>
        <div className='part1'>
        <h4>Summer 2020</h4>
        <h1>NEW COLLECTION</h1>
        <p>We know how large objects will act, <br />
          but things on a small scale.
        </p> <br /> <br />
        <button>Shop Now</button>
        </div>
        <div className='girlimg'>
          <img className='girl-img' src={girl} alt='Not Found'></img>
        </div>
      </div>
    </div>
  )
}
export default Section1