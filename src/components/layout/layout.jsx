import { Outlet } from 'react-router-dom'
import './layout.css'
import { Nav } from './nav/nav'
import { Footer } from './footer/footer'

export function Layout ({basket}) {
    return (
        <>
        <Nav basket = {basket} />
        <Outlet/>
        <Footer />
        </>
    )
}