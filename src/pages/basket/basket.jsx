import { useNavigate } from 'react-router-dom'

import { Product } from '../product/product'
import { BasketItem } from '../basketItem/basketItem'

import './basket.css'

export function Basket ({basket , setBasket , add , remove}) {

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
            </div>
        </div>
}