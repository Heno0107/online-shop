import { useState , useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'

import { Layout } from './components'
import { Home } from './pages'

import './App.css'

function App() {

  const [products , setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
  },[])

  console.log(products)
  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout />}>
        <Route index element = {<Home products = {products}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App