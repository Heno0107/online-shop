import { Outlet } from 'react-router-dom'

import { Nav } from '../nav/nav'
import { Footer } from '../footer/footer'

import './layout.css'

export function Layout () {
    return (
        <>
        <Nav/>
        <Outlet/>
        <Footer />
        </>
    )
}