import React, {useState}  from 'react';
import PropTypes  from 'prop-types';
import { Categories } from './Categories';

export const Search = ({setBuscador}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setBuscador(buscador=>[inputValue, ...buscador]);
            setInputValue('');
        }
    }
    return (
        <>
            <div className="container row ">
                <form className="col s12 m12 section scrollspy" autoComplete="off" id='Buscador' onSubmit={handleSubmit}>
                    <div className="input-field col s8 m8">
                        <i className="material-icons prefix">search</i>
                        <input placeholder="Buscador" id="first_name" type="text" className="validate" onChange={handleInputChange}/>
                    </div>
                     <div className="input-field col s4 m4">
                        <select>
                        <option value="1" >Todos</option>
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
            <Categories/>
        </>
    )
}
