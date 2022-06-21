import React, { FC } from 'react';

import "../../styles/components/Layouts/Footer.css";

export const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footerFlex'>
                    <div className='footerFlex__about'>
                        <div>
                            <span>About</span>
                            <span>Jobs</span>
                            <span>Press</span>
                            <span>News</span>
                            <span>Gift</span>
                        </div>
                        <div>
                            <span>Facebook</span>
                            <span>Twitter</span>
                        </div>
                    </div>
                    <div className="footerFlex__info">
                        <div>
                            <span>Legal</span>
                            <span>Cookies</span>
                            <span>AdChoices</span>
                        </div>
                        <div>
                            <span>2007 - 2014 MovieRountable </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
