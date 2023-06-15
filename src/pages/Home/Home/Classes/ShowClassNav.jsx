// import { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";
// import useSelectClass from "../../../Dashboard/AllUser/hook/useSelectClass";


// const ShowClassNav = ({ classs }) => {
//     const [cart, refetch] = useSelectClass();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const { _id, className, image, instructorEmail, feedback, instructorName, classPrice, availableSeats } = classs;
//     // const [availableSeats, setAvailableSeats] = useState(classs.availableSeats);
//     const { user } = useContext(AuthContext);

//     const handleAddToCart = (item) => {

//         console.log(item);
//         if (user && user.email) {
//             const updatedSeats = availableSeats - 1;
//             console.log(updatedSeats);
//             const selectClass = { enrollItemId: _id, className, image, instructorEmail, feedback, instructorName, classPrice, availableSeats: updatedSeats, email: user.email }
//             fetch('http://localhost:5000/enroll', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(selectClass)
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.insertedId) {
//                         refetch();
//                         Swal.fire({
//                             position: 'top-end',
//                             icon: 'success',
//                             title: 'Class Added',
//                             showConfirmButton: false,
//                             timer: 1500
//                         })
//                     }
//                 })
//         }
//         else {
//             Swal.fire({
//                 title: 'Please login to order the food',
//                 text: "You won't be able to revert this!",
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 confirmButtonText: 'Login Now!'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     navigate('/login', { state: { from: location } })
//                 }
//             })
//         }
//     }

//     return (
//         <div className="">
//             <div className="card card-side bg-base-100 shadow-xl">
//                 <figure><img src={classs.image} alt="Movie" /></figure>
//                 <div className="card-body">
//                     <h2 className="card-title">Class name : {classs.className}</h2>
//                     <p>Instructor Name : {classs.instructorName}</p>
//                     <p>Instructor Email : {classs.instructorEmail}</p>
//                     <p>Available Seats : {classs.availableSeats}</p>
//                     <p>Price : {classs.classPrice}</p>
//                     <div className="card-actions justify-center">
//                         <button className="btn w-full btn-primary" onClick={handleAddToCart}>
//                             SELECT
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default ShowClassNav;


// import { useContext } from "react";
// import Swal from "sweetalert2";
// import { useLocation, useNavigate } from "react-router-dom";
// import useSelectClass from "../../../Dashboard/AllUser/hook/useSelectClass";
// import { AuthContext } from "../../provider/AuthProvider";

// const ShowClassNav = ({ classs }) => {
//   const [cart, refetch] = useSelectClass();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const {
//     _id,
//     className,
//     image,
//     instructorEmail,
//     feedback,
//     instructorName,
//     classPrice,
//     availableSeats,
//   } = classs;
//   const { user } = useContext(AuthContext);

//   const handleAddToCart = () => {
//     if (user && user.email) {
//         if (availableSeats > 0) {
//             const updatedSeats = availableSeats - 1;
//             classs.availableSeats = updatedSeats;
//         const selectClass = {
//           enrollItemId: _id,
//           className,
//           image,
//           instructorEmail,
//           feedback,
//           instructorName,
//           classPrice,
//           availableSeats: updatedSeats,
//           email: user.email,
//         };

//         // Update available seats in the UI

//         fetch(`http://localhost:5000/enroll`, {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(selectClass),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.insertedId) {
//               refetch();
//               Swal.fire({
//                 position: "top-end",
//                 icon: "success",
//                 title: "Class Added",
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
//             }
//           });
//       } else {
//         Swal.fire({
//           title: "No available seats",
//           text: "There are no available seats for this class.",
//           icon: "warning",
//           confirmButtonColor: "#3085d6",
//           confirmButtonText: "OK",
//         });
//       }
//     } else {
//       Swal.fire({
//         title: "Please login to order the food",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Login Now!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           navigate("/login", { state: { from: location } });
//         }
//       });
//     }
//   };

//   return (
//     <div className="">
//       <div className="card card-side bg-base-100 shadow-xl">
//         <figure>
//           <img src={classs.image} alt="Movie" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Class name: {classs.className}</h2>
//           <p>Instructor Name: {classs.instructorName}</p>
//           <p>Instructor Email: {classs.instructorEmail}</p>
//           <p>Available Seats: {classs.availableSeats}</p>
//           <p>Price: {classs.classPrice}</p>
//           <div className="card-actions justify-center">
//             <button className="btn w-full btn-primary" onClick={handleAddToCart}>
//               SELECT
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowClassNav;


// import { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useLocation, useNavigate } from "react-router-dom";
// import useSelectClass from "../../../Dashboard/AllUser/hook/useSelectClass";

// const ShowClassNav = ({ classs }) => {
//     const [cart, refetch] = useSelectClass();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const {
//         _id,
//         className,
//         image,
//         instructorEmail,
//         feedback,
//         instructorName,
//         classPrice,
//         availableSeats,
//     } = classs;
//     const { user } = useContext(AuthContext);

//     const handleAddToCart = () => {
//         if (user && user.email) {
//             if (availableSeats > 0) {
//                 const updatedSeats = availableSeats - 1;
//                 const selectClass = {
//                     enrollItemId: _id,
//                     className,
//                     image,
//                     instructorEmail,
//                     feedback,
//                     instructorName,
//                     classPrice,
//                     availableSeats: updatedSeats,
//                     email: user.email,
//                 };

//                 fetch(`http://localhost:5000/classes/${_id}/updateSeats`, {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(selectClass),
//                 })
//                     .then((res) => res.json())
//                     .then((data) => {
//                         if (data.updatedClass) {
//                             // Update available seats in the UI
//                             classs.availableSeats = updatedSeats;
//                             refetch();
//                             Swal.fire({
//                                 position: "top-end",
//                                 icon: "success",
//                                 title: "Class Added",
//                                 showConfirmButton: false,
//                                 timer: 1500,
//                             });
//                         }
//                     });
//             } else {
//                 Swal.fire({
//                     title: "No available seats",
//                     text: "There are no available seats for this class.",
//                     icon: "warning",
//                     confirmButtonColor: "#3085d6",
//                     confirmButtonText: "OK",
//                 });
//             }
//         } else {
//             Swal.fire({
//                 title: "Please login to order the food",
//                 text: "You won't be able to revert this!",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Login Now!",
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     navigate("/login", { state: { from: location } });
//                 }
//             });
//         }
//     };

//     return (
//         <div className="">
//             <div className="card card-side bg-base-100 shadow-xl">
//                 <figure>
//                     <img src={classs.image} alt="Movie" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">Class name: {classs.className}</h2>
//                     <p>Instructor Name: {classs.instructorName}</p>
//                     <p>Instructor Email: {classs.instructorEmail}</p>
//                     <p>Available Seats: {classs.availableSeats}</p>
//                     <p>Price: {classs.classPrice}</p>
//                     <div className="card-actions justify-center">
//                         <button className="btn w-full btn-primary" onClick={handleAddToCart}>
//                             SELECT
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShowClassNav;

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../../Dashboard/AllUser/hook/useAdmin";
import useInstructor from "../../../Dashboard/AllUser/hook/useInstructor";

const ShowClassNav = ({ classs }) => {
    // console.log(class);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [disabled, setDisabled] = useState(false);
    const {
        _id,
        className,
        image,
        instructorEmail,
        feedback,
        instructorName,
        classPrice,
        availableSeats,
    } = classs;


    const handleAddClass = add => {

        setDisabled(true)

        if (user && user.email) {
            const selectedClasses = { selectClassId: _id, className, image, instructorName, instructorEmail, availableSeats, classPrice, email: user?.email }
            fetch('https://summer-season.vercel.app/enroll', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your class selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }



    return (

        <div className=''>
            <div className={classs.availableSeats === 0 ? 'bg-red-400 card card-side bg-base-100 shadow-xl' : 'bg-blue-600 card card-side bg-base-100 shadow-xl'}>
            <figure>
                <img src={classs.image} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Class name: {classs.className}</h2>
                <p>Instructor Name: {classs.instructorName}</p>
                <p>Instructor Email: {classs.instructorEmail}</p>
                <p>Available Seats: {classs.availableSeats}</p>
                <p>Price: {classs.classPrice}</p>
                <div className="card-actions">

                    {isAdmin || isInstructor || availableSeats === 0 ? (
                        <>
                            <button
                                disabled
                                onClick={handleAddClass}
                                className='btn'
                            >
                                Select
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleAddClass}
                                className='btn'
                            >
                                Select
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
        </div >
    );
};

export default ShowClassNav;