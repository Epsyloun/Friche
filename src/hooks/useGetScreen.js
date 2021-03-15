import {useState} from 'react';

export const useGetScreen = () =>{
    const [height, setHeight] = useState(window.innerHeight)
    window.addEventListener("resize", ()=>{
        setHeight(window.innerHeight)
    });
    return height;
}

