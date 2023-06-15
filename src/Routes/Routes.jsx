import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../pages/Home/Dashboard/Dashboard";
import AddClass from "../pages/Home/Dashboard/AddClass/AddClass";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import Instructor from "../pages/Dashboard/Instructor/Instructor";
import Classes from "../pages/Home/Home/Classes/Classes";
import MyInstructorClasses from "../pages/Dashboard/MyInstructorClasses/MyInstructorClasses";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import SuccessEnrollClass from "../pages/Dashboard/SuccessEnrollClass/SuccessEnrollClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminRoute from "../Route/AdminRoute";
import InstructorRoute from "../Route/InstructorRoute";
import ErrorElement from "../pages/ErrorElement/ErrorElement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/class',
                element: <Classes></Classes>,
            },

            {
                path: '/instructor',
                element: <Instructor></Instructor>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Signup></Signup>
            },

        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'allUsers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'selectedClass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'myClass',
                element: <InstructorRoute><MyInstructorClasses></MyInstructorClasses></InstructorRoute>
            },
            {
                path: 'manageClass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },

            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => { return fetch(`https://summer-season.vercel.app/enroll/${params.id}`) },
            },
            {
                path: 'successEnroll',
                element: <SuccessEnrollClass></SuccessEnrollClass>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
        ]
    },

]);
