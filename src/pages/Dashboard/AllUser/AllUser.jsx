import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxios from './hook/useAxios';
import { useQuery } from '@tanstack/react-query';

const AllUser = () => {
    const [axiosSecure] = useAxios();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    console.log(users);

    const handleMakeAdmin = (user) => {
        fetch(`https://summer-season.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleMakeInstructor = (user) => {
        fetch(`https://summer-season.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="w-full px-16">
            <h2 className='text-3xl my-9 font-bold text-red-800 text-center'>
                All Users
                <hr />
            </h2>
            <div className="overflow-x-auto w-full">
               
            </div>
        </div>
    );
};

export default AllUser;