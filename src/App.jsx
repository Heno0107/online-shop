import { useState , useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'

import { Layout } from './components'
import { Basket, Electronics, Home, Jewelery, Men, Women } from './pages'

import './App.css'

function App() {

  const [products , setProducts] = useState([])

  const [basket , setBasket] = useState([])

  const add = (prod) => {
      setBasket([...basket , prod])
  }

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
        <Route index element = {<Home products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/men' element = {<Men products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/jewelery' element = {<Jewelery products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/electronics' element = {<Electronics products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/women' element = {<Women products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/basket' element = {<Basket basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App