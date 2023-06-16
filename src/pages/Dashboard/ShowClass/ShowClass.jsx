import { useState } from "react";
import Swal from "sweetalert2";


const ShowClass = ({ classs, index, refetch }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { _id } = classs;
    const handleApproved = (id, status) => {
        console.log(id, status)
        fetch(`https://summer-season.vercel.app/addClasses/${id}/?status=${status}`, {
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
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={classs.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {classs.className}
                </td>
                <td>{classs.instructorName}</td>
                <td>{classs.instructorEmail}</td>
                <td>{classs.availableSeats}</td>
                <td>{classs.classPrice}</td>
                <td>{classs.status}</td>
                <td>
                    <button onClick={() => handleApproved(classs._id, "approved")} disabled={classs.status === 'deny' || classs.status === 'approved'} className="btn btn-success btn-sm">Approve</button>
                </td>
                <td>
                    <button onClick={() => handleApproved(classs._id, "deny")} disabled={classs.status === 'approved' || classs.status === 'deny'} className="btn btn-success btn-sm">Deny</button>
                </td >
                <td>
                    <button className="btn" onClick={() => showModal(classs._id)}>Feedback</button>
                    <dialog id={`my_modal_${classs._id}`} open={modalOpen} className="modal">
                        <div method="dialog">
                            <button className="btn text-white bg-gray-500 hover:bg-black" onClick={closeModal}>✕</button>
                            <form onSubmit={sendFeedback} className="modal-box">
                                <input
                                    name='feedback'
                                    placeholder="Write your feedback here..."
                                    rows="4"
                                    className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></input>
                                <input className="btn text-white bg-red-500 hover:bg-black" type="submit" value="feedback" />
                            </form>
                        </div>
                    </dialog>

                </td>
            </tr >
        </>
    );
};

export default ShowClass;