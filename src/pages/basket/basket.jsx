import { useNavigate } from 'react-router-dom'

import { BasketItem } from '../../components/'

import './basket.css'
import { useState } from 'react'

export function Basket ({basket ,  remove , removeAll}) {

    const [total , setTotal] = useState(basket.reduce((sum , bask) => sum + bask.initPrice , 0))

    function totalPrice () {
        setTotal(
            basket.reduce((sum , bask) => sum + bask.initPrice , 0)
        )
    }
    
    const navigate = useNavigate()

    return <div className="home">

        <div className="basketFlex">
            <button onClick={() => navigate(-1)} className='goBack'>
                Go Back
            </button>

            <button className='deleteAll' onClick={() => removeAll(setTotal)}>
                Remove All
            </button>
        </div>


            {
                basket.length ? '' : <h2 className='empty'>Basket Is Empty</h2>
            }
            <div className="basket">
                {
                    basket.map((prod) => {
                        return <BasketItem key = {prod.id} prod = {prod} basket = {basket} remove = {remove} totalPrice = {totalPrice}/>
                    })
                }

                <span className='buy'>BUY ({total.toFixed(2)}$)</span>
            </div>
        </div>
}