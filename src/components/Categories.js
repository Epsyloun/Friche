import React from 'react'
import semillas from "../img/semillas.png";

export const Categories = () => {
    return (
        <>
            <div id="Categories" className="container row center section scrollspy">
                <h1>Categorias</h1>
                <div className="col s12 m4 article">
                    <i class="large material-icons">filter_vintage</i>
                    <h5>Salados</h5>
                </div>
                <div className="col s12 m4 article">
                    <i class="large material-icons">favorite_border</i>
                    <h5>Dulces</h5>
                </div>
                <div className="col s12 m4 article">
                    <i class="large material-icons">local_drink</i>
                    <h5>Bebidas</h5>
                </div>
            </div>
        </>
    )
}
