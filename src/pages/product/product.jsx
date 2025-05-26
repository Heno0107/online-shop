import { useEffect } from 'react'

import './product.css'
import { NavLink } from 'react-router-dom'

export function Product ({prod , basket , setBasket , add}) {
    return (
        <div className="product">
            <div className='imgDiv'>
                <img src={prod.image}/>
            </div>

            <div className="textDiv">
                <NavLink to={`/${prod.id}`}><h3>{prod.title}</h3></NavLink>
                <p>{prod.price}$</p>
                <button onClick={() => add(prod)}>Add To Basket</button>
                {console.log(basket)}
            </div>
        </div>
    )
}