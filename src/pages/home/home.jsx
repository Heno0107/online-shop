// import { SimpleSlider } from './slider/slider'

import { useState } from 'react'
import { Product } from '../product/product'
import './home.css'

export function Home ({products , basket , setBasket , add}) {


    return (
        <div className="home">
            {/* <SimpleSlider products = {products}/> */}

            <div className="products">
                {
                    products.map((prod) => {
                        return <Product key = {prod.id} prod = {prod} basket = {basket} setBasket = {setBasket} add = {add}/>
                    })
                }
            </div>
        </div>
    )
}