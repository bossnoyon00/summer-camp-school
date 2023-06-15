import React from 'react';
import useSelectClass from '../AllUser/hook/useSelectClass';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedClass = () => {

    const [cart, refetch] = useSelectClass();

    const handleDelete = (itemId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-season.vercel.app/enroll/${itemId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };


    return (
        <div className="w-full">

            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                {/* <h3 className="text-3xl">Total Price: ${className}</h3> */}
                {/* <Link to='/dashboard/payment'>
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link> */}
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Class Price</th>
                            <th>Available Seats</th>
                            <th>Delete</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {item.className}
                                </td>
                                <td>
                                    {item.instructorName}
                                </td>
                                <td>
                                    {item.instructorEmail}
                                </td>

                                <td>
                                    {item.classPrice}
                                </td>
                                <td>
                                    {item.availableSeats}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-primary'>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${item._id}`}>
                                        <button className="btn btn-warning btn-sm">PAY</button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;