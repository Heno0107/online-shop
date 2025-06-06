import { useState , useContext } from 'react'

import { Product } from '../../components/product/product'
import { myContext } from '../../context'

import './men.css'

export function Men () {
    const {products , add} = useContext(myContext)

    const [men , setMen] = useState(products.filter((prod) => prod.category === `men's clothing`))
    
    return (
    <div className="home">
        <div className="products">
            {
                men.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} add = {add}/>
                })
            }
        </div>
    </div>
    )
}