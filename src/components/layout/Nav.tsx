import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, MouseEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import "../../styles/components/Layouts/Nav.css";

export const Nav: FC = () => {

    const params = useParams();
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const handleOpenNav = (e: MouseEvent<HTMLDivElement>) => {
        setMenuOpen( !menuOpen );
        document.body.classList.toggle("body--static")
    }

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
                        <div 
                            onClick={ handleOpenNav }
                        >
                            <FontAwesomeIcon 
                                icon={ faAlignLeft }
                                className="icon--nav"  
                            />
                        </div>
                        <div className={`navigationLinks__right ${ menuOpen && "right--open" }`}>
                            <p>Login</p>
                            <p className='right--btn'>Sign Up</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
