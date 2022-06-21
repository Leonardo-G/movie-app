import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { MovieId } from '../pages/MovieId'

export const AppRouter:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/movie/:id" element={ <MovieId /> }/>
            </Routes>
        </BrowserRouter>
    )
}
