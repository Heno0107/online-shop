import { useState , useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'

import { Layout } from './components'
import { Basket, Electronics, Home, Jewelery, Men, Women } from './pages'

import './App.css'

function App() {

  const [products , setProducts] = useState([])

  const [basket , setBasket] = useState([])

  const add = (prod) => {
    if(basket.find((bask) => bask.id === prod.id)){
      basket.forEach((bask) => {
        if(bask.id === prod.id) {
          bask.count++
          bask.initPrice += bask.price
        }
      })
    } else {
      setBasket([...basket , prod])
    }
  }

  const remove = (id) => {

    basket.forEach((bask) => {
      if(bask.id === id){
        bask.count = 1
        bask.initPrice = bask.price
      }
    })

        setBasket(basket.filter((bask) => bask.id !== id))
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => data.map((el) => {
    return {
      ...el ,
      count : 1 ,
      initPrice : el.price
    }
  }))
  .then(data => setProducts(data))
  },[])


  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout basket = {basket}/>}>
        <Route index element = {<Home products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/men' element = {<Men products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/jewelery' element = {<Jewelery products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/electronics' element = {<Electronics products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/women' element = {<Women products = {products} basket = {basket} setBasket = {setBasket} add = {add}/>}/>
        <Route path='/basket' element = {<Basket basket = {basket} setBasket = {setBasket} add = {add} remove = {remove}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App