import {useState,useEffect} from 'react';
import {getProducts} from '../helpers/getProducts'

export const useGetProductos = () =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect (()=> {

        getProducts()
            .then(Snacks => {
                    setState({
                        data: Snacks,
                        loading: false
                    })
            })

    },[])



    return state;

}
