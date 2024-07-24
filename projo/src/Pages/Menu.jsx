import React from 'react'
import Menulist from '../helper/menulist'
import Menucard from '../Components/Menucard'
import '../Styles/Menu.css'

const Menu = () => {
  return (
    <div className="menu">
    <h1 className="menuTitle">Our Menu</h1>
    <div className="menuList">
      {Menulist.map((menuItem, key) => (
        <Menucard
          key={key}
          name={menuItem.name}
          image={menuItem.image}
          price={menuItem.price}
        />
      ))}
    </div>
  </div>
  )
}

export default Menu