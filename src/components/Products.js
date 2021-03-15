import React from 'react'
import cafo from "../img/cafo.jpg";

export const Products = () => {
    return (
        <>
        <section className='container'>
             <div class="row">
                <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                    <img src={cafo}/>
                    <span class="card-title">Card Title</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                </div>

                <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                    <img src={cafo}/>
                    <span class="card-title">Card Title</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                </div>

                <div class="col s12 m6 l4">
                <div class="card">
                    <div class="card-image">
                    <img src={cafo}/>
                    <span class="card-title">Card Title</span>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                    </div>
                    <div class="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}
