import React, { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';
import usePopularClasses from '../../Dashboard/AllUser/hook/usePopularClasses';

const PopularClass = () => {
    // const { loading } = useContext(AuthContext);
    // if (loading) {
    //     return <progress className='progress w-56'></progress>
    // }
    
    const [popularClass, loading] = usePopularClasses();
    const popularAllClass = popularClass.slice(0, 6);
   
    return (
        <div>
            <h2 className='text-4xl my-8 text-center text-sky-400'>Popular Classes</h2>

            <div>
                {
                    loading ? <progress className='progress w-56'></progress> : <div className='grid  px-12 md:grid-cols-3 gap-5'>
                        {
                            popularAllClass.map(pClass => <PopularClassCard pClass={pClass} key={pClass._id}></PopularClassCard>)
                        }
                    </div>
                }
            </div>


        </div>
    );
};

export default PopularClass;