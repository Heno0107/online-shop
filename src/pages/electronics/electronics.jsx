import { useContext, useState } from 'react'

import { Product } from '../../components/product/product'
import { myContext } from '../../context'

import './electronics.css'

export function Electronics () {
    const {products , add} = useContext(myContext)
    const [elec , setElec] = useState(products.filter((prod) => prod.category === 'electronics'))

    return (
    <div className="home">
        <div className="products">
            {
                elec.map((prod) => {
                    return <Product key = {prod.id} prod = {prod} add = {add}/>
                })
            }
        </div>
    </div>
    )
}