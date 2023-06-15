import React, { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const PopularClass = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <progress className='progress w-56'></progress>
    }
    const [popularClass, setPopularClass] = useState([]);
    useEffect(() => {
        fetch('https://summer-season.vercel.app/popularClass')
            .then(res => res.json())
            .then(data => {
                setPopularClass(data)
            })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default PopularClass;