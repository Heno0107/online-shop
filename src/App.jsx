import { useState , useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'

import './App.css'

function App() {

  const [products , setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
  },[])

  return (
    <>
      
    </>
  )
}

export default App