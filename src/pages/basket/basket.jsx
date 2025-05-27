import { useNavigate } from 'react-router-dom'

import { Product } from '../product/product'
import { BasketItem } from '../basketItem/basketItem'

import './basket.css'
import { useEffect, useState } from 'react'

export function Basket ({basket , setBasket , add , remove}) {

    const [total , setTotal] = useState(0)

    useEffect(() => {
        let sum = 0
        basket.forEach((bask) => {
            sum += bask.initPrice
        });
        setTotal(sum)
    }, [basket])
    const navigate = useNavigate()
    return <div className="home">

            <button onClick={() => navigate(-1)} className='goBack'>
                Go Back
            </button>

            {
                basket.length ? '' : <h2 className='empty'>Basket Is Empty</h2>
            }
            <div className="basket">
                {
                    basket.map((prod) => {
                        return <BasketItem key = {prod.id} prod = {prod} basket = {basket} remove = {remove}/>
                    })
                }

                <span className='buy'>BUY ({total}$)</span>
            </div>
        </div>
}