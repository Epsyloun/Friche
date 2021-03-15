import React from 'react'
import { Intro } from './components/Intro';
import {Navbar} from './components/Navbar'
import { Categories } from './components/Categories';
import { Search } from './components/Search'
import { Products } from './components/Products'
// import "./init";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Intro/>
            <Categories/>        
            <Search/>
            <Products/>
        </>
    )
}
