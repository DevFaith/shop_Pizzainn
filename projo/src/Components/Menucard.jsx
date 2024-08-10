import React from 'react'

const Menucard = (props) => {
  const addCart  = () =>{
    props.handleCart (
      {name : props.name, 
       price: props.price,
        image: props.image,
      }
    )
   

  }
  return (
    <div className='menuItem'>
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <button className='button' onClick={(addCart)}>Add to Cart</button>
    </div>
  )
}

export default Menucard
