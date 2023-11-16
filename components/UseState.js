import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState({
        countOne: 0,
        countTwo: 1,
        countThree: 2
    });
  return (
    <div>        
      <button style={{width:"100px"}} onClick={(prev)=>{ setCount(...prev, count.countOne - 1)}}>-</button>
      <div>{count.countOne}</div>
      <div>{count.countTwo}</div>
      <div>{count.countThree}</div>
      <button style={{width:"100px"}} onClick={(prev)=>{console.log(count); setCount(...prev, count.countThree + 1)}}>+</button>
    </div>
  )
}

export default UseState
