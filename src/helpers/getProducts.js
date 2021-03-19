import Productos from '../data/Productos'
    export const getProducts = async() =>{


        const Products = Productos.map(Snacks => {
            return{
                id: Snacks.id,
                name: Snacks.name,
                precio: Snacks.precio,
                exist: Snacks.exist
            }
        })

        return Products;
    }