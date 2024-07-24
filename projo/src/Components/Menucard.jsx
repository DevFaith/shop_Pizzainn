import React from 'react'

const Menucard = (props) => {
    console.log(props);
  return (
    <div className='menuItem'>
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  )
}

export default Menucard
