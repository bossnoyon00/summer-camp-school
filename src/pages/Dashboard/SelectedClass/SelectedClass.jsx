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

           
        </div>
    );
};

export default SelectedClass;