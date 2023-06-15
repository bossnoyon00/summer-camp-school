
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';


const image_hosting_token = import.meta.env.VITE_Image_hosting_token;
// console.log(image_hosting_token);

const AddClass = () => {

    const { user } = useContext(AuthContext);

    // console.log(user)
    console.log(user)
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { className, classPrice, availableSeats, instructorName, instructorEmail } = data;
                    // console.log(data)
                    const newClass =
                    {
                        className: className,
                        classPrice: parseFloat(classPrice),
                        availableSeats: parseFloat(availableSeats),
                        image: imgURL,
                        instructorName: instructorName,
                        instructorEmail: instructorEmail,
                        status: "pending",
                        enrolled: 0
                    }
                    // console.log(newClass)
                    fetch('https://summer-season.vercel.app/class',
                        {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newClass)
                        })
                        .then(data => {
                            Swal.fire('Your Class has Been Added')
                            reset();
                            if (data.insertedId) {

                            }
                        })
                }
            })

    };



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-8 my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor  Name</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.displayName}
                            {...register("instructorName")}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor  Email</span>
                        </label>
                        <input type="email" readOnly defaultValue={user?.email}
                            {...register("instructorEmail")}
                            className="input input-bordered w-full " />
                    </div>
                </div>


                <div className="md:flex  gap-8 my-4">

                    <div className="form-control mt-4 w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input type="text" {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                </div>
                <div className="md:flex gap-8 my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available  Seats</span>
                        </label>
                        <input type="number" placeholder="Available  Seats"
                            {...register("availableSeats", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class  Price</span>
                        </label>
                        <input type="number" placeholder="Class  Price"
                            {...register("classPrice", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="w-full mx-auto flex justify-center">
                    <input className="btn bg-red-600 hover:bg-black border-0 text-white w-full" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;