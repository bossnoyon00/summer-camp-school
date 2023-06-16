import React from 'react';

const PopularInstructorCard = ({ popularInsturctorData }) => {
    // console.log(popularInsturctorData);
    const { photo, name, email } = popularInsturctorData;
    return (
        <div className="card bg-rose-300 glass">
            <figure><img className="rounded-lg object-cover" src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <p className="font-semibold">Instructor Name : {name}</p>
                <p className="font-semibold">Instructor Email : {email}</p>

                <div className="card-actions">

                </div>
            </div>

        </div>
    );
};

export default PopularInstructorCard;