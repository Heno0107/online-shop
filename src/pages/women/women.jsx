import { useContext, useState } from 'react'

import { Product } from '../../components/product/product'
import { myContext } from '../../context'

import './women.css'

export function Women () {
    const {products , add} = useContext(myContext)
    const [women , setWomen] = useState(products.filter((prod) => prod.category === `women's clothing`))

    return (
    <div className="home">
        <div className="products">
            {
                women.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} add = {add}/>
                })
            }
        </div>
    </div>
    )
}