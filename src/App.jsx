import { useState , useEffect, useRef } from 'react'
import { Routes , Route , useNavigate } from 'react-router-dom'

import { Layout } from './components'
import { Basket, Electronics, Home, Jewelery, Men, Women, Login , Profile , ProductCard } from './pages'

import './App.css'

function App() {
  const navigate = useNavigate()

  const bool = useRef(false)

  const [products , setProducts] = useState([])

  const [basketData , setBasketData] = useState([])

  const [authorizated , setAuthorizated] = useState(false)

  const [users , setUsers] = useState([
    {name : 'Avet' , email : 'avet@gmail.com' , password : '1234'},
    {name : 'Anna' , email : 'anna@gmail.com' , password : '1234'}
  ])

  useEffect(() => {
    if(bool.current){
      localStorage.setItem('basket' , JSON.stringify(basketData))
    }
    bool.current = true

  },[basketData])

  const add = (prod) => {
    if(basketData.find((bask) => bask.id === prod.id)){
      basketData.forEach((bask) => {
        if(bask.id === prod.id) {
          bask.count++
          bask.initPrice += bask.price
        }
      })
    } else {
      setBasketData([...basketData , prod])
      console.log(basketData)
    }
  }

  const remove = (id , totalPrice) => {

    basketData.forEach((bask) => {
      if(bask.id === id){
        bask.count = 1
        bask.initPrice = bask.price
      }
    })
    setBasketData(basketData.filter((bask) => bask.id !== id))
    totalPrice()
  }

  const removeAll = (setTotal) => {

    basketData.forEach((bask) => {
      bask.count = 1
      bask.initPrice = bask.price
    })
    setBasketData([])
    setTotal(0)
  }

  const isLogin = (user) => {
    setAuthorizated(user)
  }

  const checkLogin = (users , values) => {
    const user = users.find((user) => user.email === values.email)
    if(user) {
        if(user.password === values.password){
            isLogin(user)
            navigate('/profile')
        }
    }
 }

 const logOut = () => {
  setAuthorizated('')
  navigate('/')
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
        <Route path='/' element = {<Layout basket = {JSON.parse(localStorage.getItem('basket'))} authorizated = {authorizated}/>}>
        <Route index element = {<Home products = {products} basket = {basketData} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/men' element = {<Men products = {products} basket = {basketData} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/jewelery' element = {<Jewelery products = {products} basket = {basketData} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/electronics' element = {<Electronics products = {products} basket = {basketData} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/women' element = {<Women products = {products} basket = {basketData} setBasket = {setBasketData} add = {add}/>}/>
        <Route path='/basket' element = {<Basket basket = {JSON.parse(localStorage.getItem('basket'))}  remove = {remove} removeAll = {removeAll}/>}/>
        <Route path='/login' element = {<Login users = {users} isLogin = {isLogin} checkLogin={checkLogin}/>}/>
        <Route path='/profile' element = {<Profile authorizated = {authorizated} logOut = {logOut}/>}/>
        <Route path=':id' element = {<ProductCard products = {products} add = {add}/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App