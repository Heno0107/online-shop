import { useState } from 'react'

import { Product } from '../product/product'

import './electronics.css'

export function Electronics ({products , basket , setBasket , add}) {
    const [elec , setElec] = useState(products.filter((prod) => prod.category === 'electronics'))

    return (
    <div className="home">
        <div className="products">
            {
                elec.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} basket = {basket} setBasket = {setBasket} add = {add}/>
                })
            }
        </div>
    </div>
    )
}