import './basket.css'

import { Product } from '../product/product'

export function Basket ({basket , setBasket , add}) {

    return <div className="home">
            {/* <SimpleSlider products = {products}/> */}

            <div className="products">
                {
                    basket.map((prod) => {
                        return <Product key = {prod.id} prod = {prod} basket = {basket} setBasket = {setBasket} add = {add}/>
                    })
                }
            </div>
        </div>
}