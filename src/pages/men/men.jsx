import { useState } from 'react'

import { Product } from '../../components/product/product'

import './men.css'

export function Men ({products , basket , setBasket , add}) {
    const [men , setMen] = useState(products.filter((prod) => prod.category === `men's clothing`))

    return (
    <div className="home">
        <div className="products">
            {
                men.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} basket = {basket} setBasket = {setBasket} add = {add}/>
                })
            }
        </div>
    </div>
    )
}