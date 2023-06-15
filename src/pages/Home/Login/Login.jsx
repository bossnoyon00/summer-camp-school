import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import GoogleSignIn from '../Home/GoogleSignIn/GoogleSignIn';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully.',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email or password.',
                });
            });
    };

    return (
        <div>
            <div className="hero overflow-y-auto mt-4 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="card flex-shrink-0 max-w-sm   outline outline-offset-2 outline-orange-300  bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                                {errors.email && (
                                    <p className="text-red-600">Please enter a valid email.</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', { required: true })}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered relative"
                                />
                                <p onClick={() => setShowPassword(!showPassword)}>
                                    <small className=" absolute -mt-7 ml-48 ">
                                        {showPassword ? (
                                            <FaEyeSlash></FaEyeSlash>
                                        ) : (
                                            <FaEye></FaEye>
                                        )}
                                    </small>
                                </p>
                                {errors.password && (
                                    <p className="text-red-600">Please enter your password.</p>
                                )}
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    className="btn text-white bg-red-500 hover:bg-black"
                                    type="submit"
                                    value="login"
                                />
                            </div>
                            <p>
                                Don't have an account? <Link to="/signup">Signup</Link>
                            </p>
                            <div className="divider mb-0">OR</div>

                        </form>
                        <GoogleSignIn></GoogleSignIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
