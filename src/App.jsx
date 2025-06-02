import { useState , useEffect, useRef } from 'react'
import { Routes , Route } from 'react-router-dom'

import { Layout } from './components'
import { Basket, Electronics, Home, Jewelery, Men, Women, Login } from './pages'

import './App.css'

function App() {
  const bool = useRef(true)

  const [products , setProducts] = useState([])

  const [basketData , setBasketData] = useState([])

  const [authorizated , setAuthorizated] = useState(false)

  const [users , setUsers] = useState([
    {name : 'Avet' , email : 'avet@gmail.com' , password : '1234'},
    {name : 'Anna' , email : 'anna@gmail.com' , password : '1234'}
  ])

  if(bool.current){
    useEffect(() => {
      localStorage.setItem('basket' , JSON.stringify(basketData))
    },[])
  }

  // localStorage.setItem('basket' , JSON.stringify(basketData))

  const add = (prod) => {
    if(basketData.find((bask) => bask.id === prod.id)){
      basketData.forEach((bask) => {
        if(bask.id === prod.id) {
          bask.count++
          bask.initPrice += bask.price
        }
      })
    } else {
      const newBasket = [...basketData , prod]
      setBasketData(newBasket)
      console.log(basketData)
      if(bool.current) {
        localStorage.setItem('basket' , JSON.stringify(newBasket))
      }
    }
  }

  const remove = (id , totalPrice) => {

    basketData.forEach((bask) => {
      if(bask.id === id){
        bask.count = 1
        bask.initPrice = 0
      }
    })
    setBasketData(basketData.filter((bask) => bask.id !== id))
    totalPrice()
    if(bool.current) {
      console.log(basketData)
      localStorage.setItem('basket' , JSON.stringify(basketData))
    }
  }

  const removeAll = (setTotal) => {

    basketData.forEach((bask) => {
      bask.count = 1
      bask.initPrice = bask.price
    })
    const newBasket = []
    setBasketData(newBasket)
    if(bool.current) {
      localStorage.setItem('basket' , JSON.stringify(newBasket))
      setTotal(0)
    }
  }

  const isLogin = (userName) => {
    setAuthorizated(userName)
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

  const basket = JSON.parse(localStorage.getItem('basket'))

  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout basket = {basket} authorizated = {authorizated}/>}>
        <Route index element = {<Home products = {products} basket = {basket} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/men' element = {<Men products = {products} basket = {basket} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/jewelery' element = {<Jewelery products = {products} basket = {basket} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/electronics' element = {<Electronics products = {products} basket = {basket} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/women' element = {<Women products = {products} basket = {basket} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/basket' element = {<Basket basket = {basket}  remove = {remove} removeAll = {removeAll}/>}/>
        <Route path='/login' element = {<Login users = {users} isLogin = {isLogin}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App