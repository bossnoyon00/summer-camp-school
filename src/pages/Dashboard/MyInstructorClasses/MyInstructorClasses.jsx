import React from 'react';
import useCLasses from '../AllUser/hook/useCLasses';
import InstructorClassTable from '../../Home/Dashboard/InstructorClassTable/InstructorClassTable';

const MyInstructorClasses = () => {
    const [instructorMyClass] = useCLasses();
    console.log(instructorMyClass);
    return (
        <div className="w-full">
            <h2 className="text-center font-bold text-3xl">My  Classes In Powerplay Fusion Edge</h2>

            <div>
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th className="w-8">Instructor Email</th>
                                <th>Class Price</th>
                                <th>Available Seats</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instructorMyClass.map((singleMyClass, ind) =>

                                <InstructorClassTable
                                    ind={ind}
                                    singleMyClass={singleMyClass}
                                    key={singleMyClass._id}
                                ></InstructorClassTable>
                            )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyInstructorClasses;