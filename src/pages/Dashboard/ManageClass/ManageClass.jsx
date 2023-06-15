
import ShowClass from "../ShowClass/ShowClass";
import useAddClasses from "../AllUser/hook/useAddClasses";


const ManageClass = () => {

    const [addClasses, , refetch] = useAddClasses()



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Approve
                        </th>
                        <th>Denied</th>
                        <th>Feedback</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        addClasses.map((classs, index) => <ShowClass refetch={refetch} classs={classs} index={index} key={index}></ShowClass>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default ManageClass;