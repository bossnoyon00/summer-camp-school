import React, { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const PopularClass = () => {
    // const { loading } = useContext(AuthContext);
    // if (loading) {
    //     return <progress className='progress w-56'></progress>
    // }
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
            <h2 className='text-4xl my-8 text-center text-sky-400'>Popular Classes</h2>

            <div className='grid  px-12 md:grid-cols-3 gap-5'>
                {
                    popularClass.slice(0, 6).map(pClass => <PopularClassCard pClass={pClass} key={pClass._id}></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClass;