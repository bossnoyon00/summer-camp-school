import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import useAddInstructor from "../AllUser/hook/useAddInstructor";


const Instructor = () => {
    const [instructors, setInstructor] = useAddInstructor();

    // useEffect(() => {
    //     fetch('https://summer-season.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             const instructorData = data.filter(user => user.role === 'instructor');
    //             setInstructor(instructorData)
    //         })
    // }, [])



    return (
        <div className="">
            <h2 className="text-4xl my-7 text-center text-red-900">All Instructor </h2>
            <div className="grid gap-7 my-6 md:grid-cols-3">
                {
                    instructors.map(instructor => <InstructorCard instructor={instructor} key={instructor._id}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;