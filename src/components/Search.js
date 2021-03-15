import React from 'react'

export const Search = () => {
    return (
        <>
            <div class="container row">
                <form class="col s12 m12 section scrollspy" autoComplete="off" id='Buscador'>
                    <div class="input-field col s8 m8">
                        <input id="first_name" type="text" class="validate"/>
                        <label for="first_name">Productos</label>
                    </div>
                    <div class="input-field col s4 m4">
                        <select>
                        <option value="1" selected>Todos</option>
                        <option value="2">Salados</option>
                        <option value="3">Dulces</option>
                        <option value="4">Bebidas</option>
                        <option value="5">Manis</option>
                        <option value="6">Dulces tipicos</option>
                        </select>
                        <label>Categorias</label>
                    </div>
                </form>
            </div>
        </>
    )
}
