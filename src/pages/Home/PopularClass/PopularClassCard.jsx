import React from 'react';

const PopularClassCard = ({ pClass }) => {
    console.log(pClass);
    return (
        <div className="w-full shadow-xl rounded-lg">
            <figure className="aspect-w-3 aspect-h-2">
                <img src={pClass.image} alt="Shoes" className="object-cover rounded w-full h-auto" />
            </figure>
            <div className="p-4 font-semibold">
                <h2 className="text-xl font-semibold">{pClass.className}</h2>
                <p className="text-gray-600">Price: ${pClass.classPrice}</p>
                <p className="text-gray-600">Enrolled: {pClass.enrolled}</p>
                <p className="text-gray-600">Instructor Name: {pClass.instructorName}</p>
                <p className="text-gray-600">Instructor Email: {pClass.instructorEmail}</p>
            </div>
        </div>
    );
};

export default PopularClassCard;




// {/* <div className="card my-12 w-72 bg-base-100 shadow-xl">
// <figure>
//     <img src={pClass.image} alt="Shoes" />
// </figure>
// <div className="card-body">

//     <h2 className="card-title">Class Name: {pClass.className}</h2>

//     <p>Price: ${pClass.classPrice}</p>
//     <p>Enrolled: {pClass.enrolled}</p>
//     {/* <div className="card-actions justify-end">
//   <button className="btn btn-primary">Buy Now</button>
// </div> */}
// </div>
// </div> */}
