import React, { useEffect, useState } from 'react';
import Menucard from '../Components/Menucard';
import '../Styles/Menu.css';
import { db } from '../Firebase/Config';
import { getDocs, collection } from 'firebase/firestore';

const Menu = ({ handleCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsSnapshot = await getDocs(collection(db, 'products'));
        const productsData = productsSnapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {products.map((product, index) => (
          <Menucard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            handleCart={() => handleCart(product)} // Pass product to handleCart
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
