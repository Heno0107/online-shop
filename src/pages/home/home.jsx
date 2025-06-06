// import { SimpleSlider } from './slider/slider'

import { useContext } from 'react'
import { Product } from '../../components/'
import { myContext } from '../../context'

import './home.css'

export function Home () {
    const {products , add} = useContext(myContext)

    return (
        <div className="home">
            {/* <SimpleSlider products = {products}/> */}

            <div className="products">
                {
                    products.map((prod) => {
                        return <Product key = {prod.id} prod = {prod} add = {add}/>
                    })
                }
            </div>
        </div>
    )
}