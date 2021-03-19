import React from 'react'
import cafo from "../img/cafo.jpg";

export const Products = ({name, precio}) => {
    
    return (
        <>
                  
                    <div className="col s6 m4">
                        <div className="card">
                            <div className="card-image">
                            <img src={cafo} alt={name}/>
                            </div>
                            <div className="card-content">
                            <span className="card-title">{name}</span>
                            <p>${precio}</p>
                            </div>
                        </div>
                    </div>
        </>
    )
}
