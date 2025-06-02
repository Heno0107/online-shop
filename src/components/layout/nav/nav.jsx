import { NavLink } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";

import './nav.css'

export function Nav ({basket , authorizated}) {
    return (
        <nav>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/842/736/small_2x/online-shopping-text-banner-marketing-pop-art-banner-design-png.png" alt="" className='logo'/>

            <div className="links">
                <NavLink to={'/'} ><span>HOME</span></NavLink>
                <NavLink to={`/men`}><span>MEN'S CLOTHING</span></NavLink>
                <NavLink to={`/jewelery`}><span>JEWELERY</span></NavLink>
                <NavLink to={`/electronics`}><span>ELECTRONICS</span></NavLink>
                <NavLink to={`/women`}><span>WOMEN'S CLOTHING</span></NavLink>
            </div>

            <div className="navFlex">
                <NavLink to={`/basket`}><FaBasketShopping className='basket'/><sup>{basket.length}</sup></NavLink>
                {authorizated ? <NavLink to={'/profile'}><h2>@{authorizated}</h2></NavLink> : <NavLink to={`/login`} className={'login'}>LOGIN</NavLink>}
            </div>
            
        </nav>
    )
}