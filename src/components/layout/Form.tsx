import React, { FC } from 'react';

import "../../styles/components/Layouts/Form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Form: FC = () => {

    const handleSubmitForm = ( ) => {
        alert("No disponible en esta versión")
    }

    return (
        <section className='section--form'>
            <div className='container'>
                <div className='contact'>
                    <div className='contact__info'>
                        <div>
                            <h3 className='info--title'>Want to Annotate?</h3>
                            <p className='info--contact'>Are you a writer? Feel like you could provide some great feedback on Movies.
                                Here are the features and benefits of becoming a member.
                            </p>
                        </div>
                        <div>
                            <p className='info--text'>
                                <FontAwesomeIcon icon={ faCheck } className="icon--check"/>
                                Discuss movies with friends
                            </p>
                            <p className='info--text'>
                                <FontAwesomeIcon icon={ faCheck } className="icon--check"/>
                                Build your collection of disucssed films.
                            </p>
                            <p className='info--text'>
                                <FontAwesomeIcon icon={ faCheck } className="icon--check"/>
                                Save your favourites movies
                            </p>
                        </div>
                    </div>
                    <form className='contact__form'>
                        <h3 className='form--title'>Create Account</h3>
                        <div className='form--row form--double'>
                            <input type="text" name="name" placeholder='First name'/>
                            <input type="text" name="lastname" placeholder='Last Name'/>
                        </div>
                        <div className='form--row'>
                            <input type="email" name="email" placeholder='Email Address' autoComplete="off"/>
                        </div>
                        <div className='form--row'>
                            <input type="password" name="password" placeholder='Password' autoComplete="off"/>
                        </div>
                        <div className='form--row form--double'>
                            <p>Already have an account? <span>Sign Ing</span></p>
                            <input 
                                onClick={ handleSubmitForm }
                                type="button" 
                                value="Create Account" 
                                className='btn--submit'
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
