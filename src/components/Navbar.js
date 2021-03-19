import React, {useEffect} from 'react'
import {useGetScreen} from '../hooks/useGetScreen'
import {useGetTopScreen} from '../hooks/useGetTopScreen'

export const Navbar = () => {
    const height = useGetScreen()
    const posicion = useGetTopScreen()

    useEffect(() => {
        const navbar = document.getElementById('navbar')
        if(posicion < height*(0.5)){
            navbar.classList.remove('navbar-sis')
            navbar.classList.add('navbar-non')
            
        }else{
            navbar.classList.add('navbar-sis')
            navbar.classList.remove('navbar-non')
        }
    }, [height, posicion])


    return (
        <>
            <div id='navbar' className="navbar-fixed navbar-none ">
                <nav>
                    <div className="nav-wrapper white ">
                    <a href="#!" className="brand-logo center orange-text">Logo</a>
                    <a href="#!" data-target="mobile-demo" className="sidenav-trigger right orange-text"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className='orange-text' href="#Inicio">Inicio</a></li>
                        <li><a className='orange-text' href="#Productos">Productos</a></li>
                        <li><a className='orange-text' href="#Contacto">Contactanos</a></li>
                    </ul>
                    </div>
                </nav>
            </div>

            <ul className="sidenav" id="mobile-demo">
                <li><a className='orange-text' href="#Categorias">Inicio</a></li>
                <li><a className='orange-text' href="#Categories">Categorias</a></li>
                <li><a className='orange-text' href="#Buscador">Buscador</a></li>
                <li><a className='orange-text' href="#Contacto">Contactanos</a></li>
            </ul>
        </>
    )
}
