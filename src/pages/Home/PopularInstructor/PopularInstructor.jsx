import React from 'react';
import useAddInstructor from '../../Dashboard/AllUser/hook/useAddInstructor';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructor = () => {
    const [instructors, loading] = useAddInstructor();
    const popularInstructors = instructors.slice(0, 6);
    // console.log(instructors, popularInstructors)
    return (
        <div className='bg-base-300 text-white py-8 my-8'>
            <div className="my-8">
                <h2 className='text-center text-sky-400 text-5xl'>Popular Instructor</h2>
            </div>

            {
                loading ? <progress className='progress w-56'></progress>
                    : <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 ">
                        {
                            popularInstructors.map((popularInsturctorData) =>
                                <PopularInstructorCard popularInsturctorData={popularInsturctorData} key={popularInsturctorData._id} />)
                        }
                    </div>

            }
        </div>
    );
};

export default PopularInstructor;