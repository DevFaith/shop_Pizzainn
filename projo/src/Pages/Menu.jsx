import React, {useEffect, useState} from 'react'
import Menucard from '../Components/Menucard'
import '../Styles/Menu.css'
import { db} from '../Firebase/Config'
import { getDocs, collection } from 'firebase/firestore'

const Menu = () => {
  const [products, setProducts] = useState([])

  useEffect (() => {
    const fetchProducts = async () => {
      try {
       const products = await getDocs(collection(db, 'products'))
       const productsData = products.docs.map(doc =>(doc.data ()))
      setProducts(productsData)
      
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts()
  },[])
  return (

    <div className="menu">
    <h1 className="menuTitle">Our Menu</h1>
    <div className="menuList">
      {products.map ((product, index) => 
      <Menucard name={product.name} price={product.price} image={product.image} key={index}/>
      )}
    </div>
  </div>
  )
}

export default Menu