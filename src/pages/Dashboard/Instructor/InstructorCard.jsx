

const InstructorCard = ({ instructor }) => {
    console.log(instructor);
    return (
        <div className="">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={instructor?.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor?.name}</h2>
                    <p>{instructor?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;