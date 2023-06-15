import { useState } from "react";
import Swal from "sweetalert2";


const ShowClass = ({ classs, index, refetch }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { _id } = classs;
    const handleApproved = (id, status) => {
        console.log(id, status)
        fetch(`http://localhost:5000/addClasses/${id}/?status=${status}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Your Class Approved !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const sendFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const requestBody = {
            feedback: feedback // Wrap the feedback value inside an object property
        };

        console.log(feedback)
        fetch(`https://summer-season.vercel.app/addClasses/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {

                    form.reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `You sent a Feedback!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    };



    const showModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
           
        </>
    );
};

export default ShowClass;