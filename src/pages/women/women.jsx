import { useState } from 'react'

import { Product } from '../../components/product/product'

import './women.css'

export function Women ({products , basket , setBasket , add}) {
    const [women , setWomen] = useState(products.filter((prod) => prod.category === `women's clothing`))

    return (
    <div className="home">
        <div className="products">
            {
                women.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} basket = {basket} setBasket = {setBasket} add = {add}/>
                })
            }
        </div>
    </div>
    )
}