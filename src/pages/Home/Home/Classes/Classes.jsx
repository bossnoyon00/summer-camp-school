import React, { useEffect, useState } from 'react';
import ShowClassNav from './ShowClassNav';
// import { useContext } from 'react';
// import { AuthContext } from '../../provider/AuthProvider';

const Classes = () => {
    // const [loading] = useContext(AuthContext);
    // if (loading) {
    //     return <progress className="progress w-56"></progress>
    // }
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://summer-season.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                const classData = data.filter(classes => classes.
                    status === 'approved');
                setClasses(classData)
            })
    }, [])
    // console.log(classes);
    return (
        <div>
            <h2 className='text-4xl text-center my-6 text-amber-700'>Approved Classes</h2>
            <div className='grid gap-5 md:grid-cols-3'>
                {
                    classes.map(classs => <ShowClassNav classs={classs} key={classs._id}></ShowClassNav>)
                }
            </div>
        </div>
    );
};

export default Classes;