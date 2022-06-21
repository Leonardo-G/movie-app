import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav } from '../components/UI/Nav'
import { Home } from '../pages/Home'
import { MovieId } from '../pages/MovieId'

export const AppRouter:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Nav /> }>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/movie/:id" element={ <MovieId /> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
