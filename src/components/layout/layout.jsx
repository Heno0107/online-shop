import { Outlet } from 'react-router-dom'
import './layout.css'
import { Nav } from './nav/nav'
import { Footer } from './footer/footer'

export function Layout ({basket , authorizated}) {
    return (
        <>
        <Nav basket = {basket} authorizated = {authorizated}/>
        <Outlet/>
        <Footer />
        </>
    )
}