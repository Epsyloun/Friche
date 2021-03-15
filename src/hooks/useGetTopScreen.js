import {useState} from 'react';

export const useGetTopScreen = () =>{
    const [top, setTop] = useState(window.scrollY)
    window.onscroll = function() {
        setTop(window.scrollY);
      };
    return top;
}

