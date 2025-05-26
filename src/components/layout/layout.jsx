import { Outlet } from 'react-router-dom'
import './layout.css'
import { Nav } from './nav/nav'
import { Footer } from './footer/footer'

export function Layout ({}) {
    return (
        <>
        <Nav />
        <Outlet/>
        <Footer />
        </>
    )
}