import React, { FC } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import "../../styles/components/UI/Nav.css";

export const Nav: FC = () => {

    const params = useParams();

    return (
        <>
            <nav className={`navigation ${ !params?.id && "navigation--top" }`}>
                <div className='container'>
                    <div className='navigationLinks'>
                        <div className='navigationLinks__left'>
                            <Link 
                                className='left--logo'
                                to="/"    
                            >Flixus</Link>
                            <p>Browse +</p>
                        </div>
                        <div className='navigationLinks__right'>
                            <p>Login</p>
                            <p className='right--btn'>Sign Up</p>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
