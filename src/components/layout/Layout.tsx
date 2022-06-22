import React, { FC } from 'react'
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Layout: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
