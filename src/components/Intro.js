import React from 'react'
import {useGetScreen} from '../hooks/useGetScreen'
import cafo from "../img/cafo.jpg";
import semillas from "../img/semillas.png";
import mani from "../img/mani.png";

export const Intro = () => {
    const height = useGetScreen()
    

    return (
        <>
            <div id='Inicio' className="img-background padre-center-align section scrollspy" style={{height: height}}>
                <div className="container flex-center"><h1>Las mejores semillas y dulces</h1><h3>Al alcance de tu mano</h3></div>
                <a href="#Categorias" className='center flecha-abajo-caja black-text material-icons'>keyboard_arrow_down</a>
            </div>
        </>
    )
}