import { useState, useEffect } from 'react';

export const useItemFetch= () => {
    const [state, setState] = useState({});
    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/`;
        const fetchItems = async () => {
            const result = await fetch(apiUrl);
            setState(results.data);
        }},[setState]);
 return{state};       
};