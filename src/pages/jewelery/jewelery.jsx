import { useContext, useState } from 'react'

import { Product } from '../../components/product/product'
import { myContext } from '../../context'

import './jewelery.css'

export function Jewelery () {
    const {products , add} = useContext(myContext)
    const [jew , setJew] = useState(products.filter((prod) => prod.category === 'jewelery'))

    return (
    <div className="home">
        <div className="products">
            {
                jew.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} add = {add}/>
                })
            }
        </div>
    </div>
    )
}