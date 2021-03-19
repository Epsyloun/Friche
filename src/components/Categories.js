import React from 'react'
import {Products} from "./Products";
import {useGetProductos} from "../hooks/useGetProductos";

export const Categories = () => {

    const{data,loading} = useGetProductos();

    return (
        <>
            {loading && <p className=''>Cargando...</p>}

            <div id="Productos" className="container row section scrollspy">
               
                <div className="row">
                    {data.map((Productos)=>(
                        
                            <Products
                                name = {Productos.name}
                                precio = {Productos.precio}
                                key = {Productos.id}
                            />
                    
                    ))}
                </div>
            </div>
        </>
    )
}
