import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../pages/Home/provider/AuthProvider";
import useInstructor from "../pages/Dashboard/AllUser/hook/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;