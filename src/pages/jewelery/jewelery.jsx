import { useState } from 'react'

import { Product } from '../../components/product/product'

import './jewelery.css'

export function Jewelery ({products , basket , setBasket , add}) {
    const [jew , setJew] = useState(products.filter((prod) => prod.category === 'jewelery'))

    return (
    <div className="home">
        <div className="products">
            {
                jew.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} basket = {basket} setBasket = {setBasket} add = {add}/>
                })
            }
        </div>
    </div>
    )
}