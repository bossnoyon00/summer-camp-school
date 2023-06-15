import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Dashboard/AllUser/hook/useAdmin';
import useInstructor from '../../Dashboard/AllUser/hook/useInstructor';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaAddressBook, FaCamera, FaFileDownload, FaHome, FaHourglassStart, FaUniversalAccess, FaUser, FaUserAltSlash, FaUserEdit } from 'react-icons/fa';
import Reveal from 'react-awesome-reveal';

const Dashboard = () => {
    const { loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isAdmin, isInstructor);

    if (loading) {
        return <progress className='progress w-56'></progress>;
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <div className="menu p-4 w-80 h-full bg-teal-200 text-base-content">
                    <div className='flex flex-col items-center my-10'>
                        <Reveal direction="up" cascade damping={0.2} duration={500}>
                            <h1 className='text-2xl font-bold text-black '>Martial Expert</h1>
                        </Reveal>
                    </div>
                    <ul>
                        {isAdmin ? (
                            <Reveal cascade damping={0.2} duration={500}>
                                <li className='text-xl font-semibold'>

                                    <Link to='/dashboard/allUsers'><FaUser></FaUser>  Users</Link>
                                </li>
                                <li className='text-xl font-semibold'>
                                    <Link to='/dashboard/manageClass'><FaUserEdit></FaUserEdit> Manage All Classes</Link>
                                </li>
                            </Reveal>
                        ) : isInstructor ? (
                            <Reveal cascade damping={0.2} duration={500}>
                                <li className='text-xl font-semibold'>

                                    <Link to='/dashboard/addClass'>  <FaFileDownload></FaFileDownload>Add Classes</Link>
                                </li>
                                <li className='text-xl font-semibold'>

                                    <Link to='/dashboard/myClass'> <FaCamera></FaCamera>My Class</Link>
                                </li>
                            </Reveal>
                        ) : (
                            <Reveal cascade damping={0.2} duration={500}>
                                <li className='text-xl font-semibold'>

                                    <Link to='/dashboard/successEnroll'><FaHourglassStart></FaHourglassStart>Enroll Classes</Link>
                                </li>
                                <li className='text-xl font-semibold'>

                                    <Link to='/dashboard/selectedClass'> <FaAddressBook></FaAddressBook>Selected Classes</Link>
                                </li>
                                <li className='text-xl font-semibold'>

                                    <Link to='/dashboard/paymentHistory'> <FaUniversalAccess></FaUniversalAccess>Payment Successfully</Link>
                                </li>
                            </Reveal>
                        )}

                        <Reveal cascade damping={0.2} duration={500}>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/"><FaHome></FaHome> Home</NavLink>
                            </li>
                        </Reveal>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
