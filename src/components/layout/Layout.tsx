import React, { FC } from 'react'
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Form } from './Form';

export const Layout: FC = () => {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
                <Form />
            </main>
            <Footer />
        </>
    )
}
