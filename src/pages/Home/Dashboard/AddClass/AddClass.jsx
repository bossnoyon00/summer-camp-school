
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
            
        </div>
    );
};

export default AddClass;