import React, { useState } from 'react'
import { db, storage } from '../Firebase/Config'
import { useNavigate } from 'react-router-dom'
import {collection, addDoc} from 'firebase/firestore'
import { ref,uploadBytes, getDownloadURL } from 'firebase/storage'
function Addproducts() {
    const [Name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleproduct = async (e)=> {
        e.preventDefault()
        try {
         const imageRef = ref(storage, 'productsimage'+ image.name);
          await uploadBytes(imageRef, image)
        
          const imageurl = await getDownloadURL(imageRef);

          await addDoc(collection(db, 'products'), {
               name: Name,
               price: price,
               image: imageurl
           })
           navigate('/menu')
        } catch (error) {
          setError(error)
        }
    }

  return (
    <div>
      <h1>{error}</h1>
      <form onSubmit={handleproduct}>
        <input type="text"  placeholder='Enter product name' onChange={(e)=> setName (e.target.value)}/>
        <input type="number" placeholder='Enter product price' onChange={(e)=> setPrice (e.target.value)} />
        <input type="file"  placeholder='Enter product image' onChange={(e)=> setImage (e.target.files[0])}/>
        <button>Add Product</button>
      </form>
    </div>
  )
}

export default Addproducts
