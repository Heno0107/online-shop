// import { SimpleSlider } from './slider/slider'

import { Product } from '../product/product'
import './home.css'

export function Home ({products}) {

    return (
        <div className="home">
            {/* <SimpleSlider products = {products}/> */}

            <div className="products">
                {
                    products.map((prod) => {
                        return <Product key = {prod.id} prod = {prod}/>
                    })
                }
            </div>
        </div>
    )
}