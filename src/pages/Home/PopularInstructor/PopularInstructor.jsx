import React from 'react';
import useAddInstructor from '../../Dashboard/AllUser/hook/useAddInstructor';

const PopularInstructor = () => {
    const [instructors, loading] = useAddInstructor();
    const popularInstructors = instructors.slice(0, 6);
    console.log(instructors, popularInstructors)
    return (
        <div>

        </div>
    );
};

export default PopularInstructor;