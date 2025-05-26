import { NavLink } from 'react-router-dom'

import './nav.css'

export function Nav () {
    return (
        <nav>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/842/736/small_2x/online-shopping-text-banner-marketing-pop-art-banner-design-png.png" alt="" className='logo'/>

            <div className="links">
                <NavLink to={'/'}/>
            </div>
        </nav>
    )
}