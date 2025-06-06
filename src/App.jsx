import { useState , useEffect, useRef } from 'react'
import { Routes , Route , useNavigate } from 'react-router-dom'

import { Layout } from './components'
import { Basket, Electronics, Home, Jewelery, Men, Women, Login , Profile , ProductCard } from './pages'
import { myContext } from './context'

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
      
        <myContext.Provider value={{basket : JSON.parse(localStorage.getItem('basket')) , authorizated , products , basketData , setBasket : setBasketData , add , remove , removeAll , users , isLogin , checkLogin , logOut}}>
          <Routes>
            <Route path='/' element = {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path='/men' element = {<Men />}/>
            <Route path='/jewelery' element = {<Jewelery />}/>
            <Route path='/electronics' element = {<Electronics />}/>
            <Route path='/women' element = {<Women />}/>
            <Route path='/basket' element = {<Basket />}/>
            <Route path='/login' element = {<Login />}/>
            <Route path='/profile' element = {<Profile />}/>
            <Route path=':id' element = {<ProductCard />} />
            <Route path='/basket/:id' element = {<ProductCard />}/>
            </Route>
          </Routes>
        </myContext.Provider>
      
    </>
  )
}

export default App