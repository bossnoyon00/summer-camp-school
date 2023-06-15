import React, { useEffect } from 'react';
import useSuccessEnroll from '../AllUser/hook/useSuccessEnroll';

const SuccessEnrollClass = () => {

    const [enrolledClass] = useSuccessEnroll();
    console.log(enrolledClass);
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className='bg-base-300'>
                        <th>Index</th>
                        <th>Images</th>
                        <th>Class Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        enrolledClass.map((enrolledClassData, index) =>
                            <tr key={enrolledClassData._id} className='border-b-2 border-b-base-300'>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={enrolledClassData.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{enrolledClassData.className}</td>
                                <td className='text-green-800 font-semibold'>{enrolledClassData.status}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SuccessEnrollClass;