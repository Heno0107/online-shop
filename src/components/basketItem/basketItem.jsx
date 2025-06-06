import { MdDelete } from "react-icons/md";

import { useState } from "react";

import './basketItem.css'
import { NavLink } from "react-router-dom";

export function BasketItem ({prod , basket , remove , totalPrice}) {

    const [count , setCount] = useState(prod.count)
    const [price , setPrice] = useState(prod.initPrice)

    const minus = () => {
        if(prod.count > 1){
            setCount(count - 1)
            prod.count--
            setPrice(price - prod.price)
            prod.initPrice -= prod.price
            totalPrice()
        }
    }

    const plus = () => {
        if(prod.count < 10){
            setCount(count + 1)
            prod.count++
            setPrice(price + prod.price)
            prod.initPrice += prod.price
            totalPrice()
        }
    }


    return (
        <div className="basketItem">
            <img src={prod.image} alt="" />

            <NavLink to={`${prod.id}`}><h3>{prod.title}</h3></NavLink>

            <div className="counter">
                <button onClick={minus}>-</button>
                <span>{count}</span>
                <button onClick = {plus}>+</button>
            </div>

            <h3>{+price.toFixed(2)}$</h3>

            <button className="deleteBtn" onClick={() => remove(prod.id , totalPrice)}><MdDelete /></button>
        </div>
    )
}